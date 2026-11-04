/* ============ calc.js — on-screen scientific calculator for the questions ============
   Only the keys of a physical scientific calculator (Casio fx-570 / fx-991 style) that help in CO Test 1:
   COMP mode:   + − × ÷ ( ) (−) x² xʸ √ x⁻¹ ×10ˣ logₐb Ans   (clock rate, CPI, MIPS, Amdahl, bits needed)
   BASE-N mode: DEC HEX BIN OCT, A–F, and or xor Not Neg     (conversions and 2's complement, 32-bit like the real one)
   Any element with data-calc opens or closes it. The keyboard works while the calculator has focus. */
(function () {
  const state = { mode: 'comp', base: 'DEC', toks: [], shown: false, ans: { comp: 0, base: 0n }, res: '', err: '' };
  const BASES = { DEC: 10, HEX: 16, BIN: 2, OCT: 8 };
  const FN = { comp: ['√(', 'log('], base: ['Not(', 'Neg('] };

  /* ---------- COMP mode: numbers ---------- */
  function lex(toks) {           // join digit tokens into numbers (A–F are digits only in BASE-N; in COMP, E is ×10ˣ)
    const out = [], digit = state.mode === 'base' ? /^[0-9A-F]$/ : /^[0-9.]$/;
    toks.forEach(t => {
      if (digit.test(t) && out.length && out[out.length - 1].n !== undefined) out[out.length - 1].n += t;
      else if (digit.test(t)) out.push({ n: t });
      else out.push({ t });
    });
    return out;
  }
  function parser(list) {
    let i = 0;
    const peek = () => list[i], take = () => list[i++];
    const is = v => list[i] && list[i].t === v;
    const startsValue = () => list[i] && (list[i].n !== undefined || ['(', 'Ans', ...FN.comp, ...FN.base].includes(list[i].t));
    const close = () => { if (is(')')) i++; else if (i < list.length) throw 'syntax'; };   // a missing ")" at the end is fine
    return { peek, take, is, startsValue, close, end: () => i >= list.length };
  }
  function evalComp(toks) {
    const p = parser(lex(toks));
    function num(tok) { if (!/^\d*\.?\d*$/.test(tok.n) || tok.n === '.') throw 'syntax'; return parseFloat(tok.n); }
    function expr() { let v = term(); while (p.is('+') || p.is('−')) { const o = p.take().t, r = term(); v = o === '+' ? v + r : v - r; } return v; }
    function term() {
      let v = unary();
      for (;;) {
        if (p.is('×')) { p.take(); v *= unary(); }
        else if (p.is('÷')) { p.take(); const r = unary(); if (r === 0) throw 'math'; v /= r; }
        else if (p.startsValue()) v *= unary();       // 2(3) or 2√(9): implicit multiplication
        else return v;
      }
    }
    function unary() { if (p.is('−')) { p.take(); return -unary(); } return power(); }
    function power() { const b = post(); if (p.is('^')) { p.take(); const e = unary(); const r = Math.pow(b, e); if (!isFinite(r)) throw 'math'; return r; } return b; }
    function post() {
      let v = prim();
      for (;;) {
        if (p.is('²')) { p.take(); v = v * v; }
        else if (p.is('⁻¹')) { p.take(); if (v === 0) throw 'math'; v = 1 / v; }
        else return v;
      }
    }
    function prim() {
      const t = p.take();
      if (!t) throw 'syntax';
      if (t.n !== undefined) {
        let v = num(t);
        if (p.is('E')) {            // ×10ˣ
          p.take(); let sign = 1; if (p.is('−')) { p.take(); sign = -1; }
          const e = p.take(); if (!e || e.n === undefined) throw 'syntax';
          v *= Math.pow(10, sign * num(e));
        }
        return v;
      }
      if (t.t === 'Ans') return state.ans.comp;
      if (t.t === '(') { const v = expr(); p.close(); return v; }
      if (t.t === '√(') { const v = expr(); p.close(); if (v < 0) throw 'math'; return Math.sqrt(v); }
      if (t.t === 'log(') {        // log(x) is log base 10, log(a, b) is log base a of b
        const a = expr();
        if (p.is(',')) { p.take(); const b = expr(); p.close(); if (a <= 0 || a === 1 || b <= 0) throw 'math'; return Math.log(b) / Math.log(a); }
        p.close(); if (a <= 0) throw 'math'; return Math.log10(a);
      }
      throw 'syntax';
    }
    const v = expr();
    if (!p.end()) throw 'syntax';
    if (!isFinite(v)) throw 'math';
    return v;
  }
  const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  function fmtComp(v) {             // 10 significant digits, like the real display
    if (Object.is(v, -0) || Math.abs(v) < 1e-99) v = 0;
    const a = Math.abs(v);
    if (a !== 0 && (a >= 1e10 || a < 1e-9)) {
      const [m, e] = v.toExponential(9).split('e');
      return m.replace(/\.?0+$/, '') + '×10' + String(+e).replace(/./g, c => SUP[c]);
    }
    return String(+v.toPrecision(10));
  }

  /* ---------- BASE-N mode: 32-bit integers ---------- */
  const wrap = v => BigInt.asIntN(32, v);
  function evalBase(toks) {
    const p = parser(lex(toks)), r = BigInt(BASES[state.base]);
    function num(tok) {
      const digits = '0123456789ABCDEF'.slice(0, Number(r));
      let v = 0n;
      for (const c of tok.n) { const d = digits.indexOf(c); if (d < 0) throw 'syntax'; v = v * r + BigInt(d); }
      return wrap(v);
    }
    function orx() { let v = andx(); while (p.is('or') || p.is('xor')) { const o = p.take().t, b = andx(); v = o === 'or' ? v | b : v ^ b; } return wrap(v); }
    function andx() { let v = sum(); while (p.is('and')) { p.take(); v &= sum(); } return wrap(v); }
    function sum() { let v = term(); while (p.is('+') || p.is('−')) { const o = p.take().t, b = term(); v = wrap(o === '+' ? v + b : v - b); } return v; }
    function term() {
      let v = unary();
      for (;;) {
        if (p.is('×')) { p.take(); v = wrap(v * unary()); }
        else if (p.is('÷')) { p.take(); const b = unary(); if (b === 0n) throw 'math'; v = wrap(v / b); }   // whole-number division, like the calculator
        else if (p.startsValue()) v = wrap(v * unary());
        else return v;
      }
    }
    function unary() { if (p.is('−')) { p.take(); return wrap(-unary()); } return prim(); }
    function prim() {
      const t = p.take();
      if (!t) throw 'syntax';
      if (t.n !== undefined) return num(t);
      if (t.t === 'Ans') return state.ans.base;
      if (t.t === '(') { const v = orx(); p.close(); return v; }
      if (t.t === 'Not(') { const v = orx(); p.close(); return wrap(~v); }        // 1's complement
      if (t.t === 'Neg(') { const v = orx(); p.close(); return wrap(-v); }        // 2's complement
      throw 'syntax';
    }
    const v = orx();
    if (!p.end()) throw 'syntax';
    return v;
  }
  function fmtBase(v, base) {
    if (base === 'DEC') return v.toString();
    const u = BigInt.asUintN(32, v), s = u.toString(BASES[base]).toUpperCase();
    if (base !== 'BIN') return s;
    const full = v < 0n ? s.padStart(32, '0') : s.padStart(Math.ceil(s.length / 4) * 4, '0');
    return full.replace(/(.{4})(?=.)/g, '$1 ');     // groups of 4 bits
  }

  /* ---------- keys ---------- */
  const KEYS = {
    comp: [
      ['²', 'x²'], ['^', 'xʸ'], ['√(', '√'], ['⁻¹', 'x⁻¹'], ['log(', 'logₐb'],
      ['E', '×10ˣ'], ['−n', '(−)'], ['(', '('], [')', ')'], [',', ','],
      ['7'], ['8'], ['9'], ['DEL', 'DEL', 'fn'], ['AC', 'AC', 'fn'],
      ['4'], ['5'], ['6'], ['×'], ['÷'],
      ['1'], ['2'], ['3'], ['+'], ['−'],
      ['0'], ['.'], ['Ans'], ['=', '=', 'eq wide'],
    ],
    base: [
      ['DEC', 'DEC', 'b'], ['HEX', 'HEX', 'b'], ['BIN', 'BIN', 'b'], ['OCT', 'OCT', 'b'], ['DEL', 'DEL', 'fn'],
      ['A'], ['B'], ['C'], ['D'], ['AC', 'AC', 'fn'],
      ['E'], ['F'], ['('], [')'], ['÷'],
      ['and'], ['or'], ['xor'], ['Not(', 'Not'], ['×'],
      ['7'], ['8'], ['9'], ['Neg(', 'Neg'], ['−'],
      ['4'], ['5'], ['6'], ['Ans'], ['+'],
      ['1'], ['2'], ['3'], ['0'], ['=', '=', 'eq'],
    ],
  };
  function allowed(k) {
    if (state.mode !== 'base' || !/^[0-9A-F]$/.test(k)) return true;
    return '0123456789ABCDEF'.slice(0, BASES[state.base]).includes(k);
  }

  /* ---------- panel ---------- */
  let panel = null;
  function css() {
    const s = document.createElement('style');
    s.textContent = `
.calc{position:fixed;right:16px;bottom:16px;z-index:900;width:320px;max-width:calc(100vw - 16px);background:var(--paper,#fff);color:var(--ink,#111);border:1.5px solid var(--rule-strong,#111);box-shadow:0 14px 40px -12px rgba(0,0,0,.45);font-family:var(--sans,system-ui);outline:none}
.calc[hidden]{display:none}
.calc-head{display:flex;align-items:center;gap:8px;padding:6px 8px;border-bottom:1px solid var(--rule,#ccc);cursor:move;user-select:none;touch-action:none}
.calc-head b{font:600 .72rem var(--mono,monospace);text-transform:uppercase;letter-spacing:.08em}
.calc-tabs{display:flex;margin-left:auto}
.calc-tabs button,.calc-x{font:600 .7rem var(--mono,monospace);padding:3px 8px;border:1px solid var(--rule,#ccc);background:transparent;color:var(--ink-3,#666);cursor:pointer}
.calc-tabs button+button{border-left:0}
.calc-tabs button.on{background:var(--ink,#111);color:var(--paper,#fff);border-color:var(--ink,#111)}
.calc-x{border:0;font-size:1rem;line-height:1;padding:2px 6px}
.calc-screen{margin:8px;padding:8px 10px;background:var(--bg,#f3efe6);border:1px solid var(--rule,#ccc);font-family:var(--mono,monospace);min-height:74px}
.calc-ind{display:flex;gap:8px;font-size:.62rem;letter-spacing:.06em;color:var(--ink-3,#666);min-height:1em}
.calc-ind .on{color:var(--sig,#d9480f);font-weight:600}
.calc-expr{font-size:.9rem;min-height:1.3em;word-break:break-all;color:var(--ink-2,#444)}
.calc-res{font-size:1.35rem;font-weight:600;text-align:right;min-height:1.4em;word-break:break-all}
.calc-res.err{color:var(--bad,#c0262d);font-size:1rem}
.calc-keys{display:grid;grid-template-columns:repeat(5,1fr);gap:4px;padding:0 8px 8px}
.calc-keys button{font:500 .86rem var(--mono,monospace);padding:9px 0;border:1px solid var(--rule,#ccc);background:var(--paper,#fff);color:var(--ink,#111);cursor:pointer;border-radius:3px}
.calc-keys button:hover{border-color:var(--ink,#111)}
.calc-keys button:disabled{opacity:.3;cursor:default;border-color:var(--rule,#ccc)}
.calc-keys .fn{background:var(--sig-tint,#fbe4d6);color:var(--sig-ink,#b23a08)}
.calc-keys .eq{background:var(--ink,#111);color:var(--paper,#fff);border-color:var(--ink,#111)}
.calc-keys .wide{grid-column:span 2}
.calc-keys .b.on{background:var(--ink,#111);color:var(--paper,#fff)}
.calc-note{padding:0 10px 8px;font-size:.68rem;color:var(--ink-3,#666);line-height:1.4}
.calc-btn{font:600 .74rem var(--mono,monospace);text-transform:uppercase;letter-spacing:.05em;padding:3px 9px;border:1px solid var(--rule,#ccc);background:transparent;color:var(--ink-3,#666);cursor:pointer}
.calc-btn:hover,.calc-btn.on{border-color:var(--ink,#111);color:var(--ink,#111)}`;
    document.head.appendChild(s);
  }
  function build() {
    css();
    panel = document.createElement('div');
    panel.className = 'calc'; panel.hidden = true; panel.tabIndex = -1;
    panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', 'Scientific calculator');
    panel.innerHTML = `<div class="calc-head"><b>Calculator</b><span class="calc-tabs"><button data-mode="comp">COMP</button><button data-mode="base">BASE-N</button></span><button class="calc-x" aria-label="Close calculator">×</button></div>
      <div class="calc-screen"><div class="calc-ind"></div><div class="calc-expr"></div><div class="calc-res"></div></div>
      <div class="calc-keys"></div><div class="calc-note"></div>`;
    document.body.appendChild(panel);
    panel.querySelector('.calc-x').onclick = close;
    panel.querySelectorAll('[data-mode]').forEach(b => b.onclick = () => setMode(b.dataset.mode));
    panel.querySelector('.calc-keys').addEventListener('click', e => { const b = e.target.closest('button'); if (b) { press(b.dataset.k); panel.focus(); } });
    panel.addEventListener('keydown', onKey);
    drag(panel.querySelector('.calc-head'));
    draw();
  }
  function drag(h) {
    h.addEventListener('pointerdown', e => {
      if (e.target.closest('button')) return;
      const r = panel.getBoundingClientRect(), dx = e.clientX - r.left, dy = e.clientY - r.top;
      h.setPointerCapture(e.pointerId);
      const move = m => {
        const x = Math.min(Math.max(0, m.clientX - dx), innerWidth - r.width), y = Math.min(Math.max(0, m.clientY - dy), innerHeight - 40);
        Object.assign(panel.style, { left: x + 'px', top: y + 'px', right: 'auto', bottom: 'auto' });
      };
      const up = () => { h.removeEventListener('pointermove', move); h.removeEventListener('pointerup', up); };
      h.addEventListener('pointermove', move); h.addEventListener('pointerup', up);
    });
  }
  function label(t) {
    return t === 'E' && state.mode === 'comp' ? '×10^' : /^(and|or|xor)$/.test(t) ? ' ' + t + ' ' : t;
  }
  function draw() {
    if (!panel) return;
    panel.querySelectorAll('[data-mode]').forEach(b => b.classList.toggle('on', b.dataset.mode === state.mode));
    panel.querySelector('.calc-ind').innerHTML = state.mode === 'comp' ? '<span class="on">COMP</span><span>Math</span>'
      : Object.keys(BASES).map(b => `<span class="${b === state.base ? 'on' : ''}">${b}</span>`).join('') + '<span>32-bit</span>';
    panel.querySelector('.calc-expr').textContent = state.toks.map(label).join('') || ' ';
    const res = panel.querySelector('.calc-res');
    res.textContent = state.err || state.res; res.classList.toggle('err', !!state.err);
    panel.querySelector('.calc-keys').innerHTML = KEYS[state.mode].map(([k, l = k, c = '']) =>
      `<button data-k="${k}" class="${c}${c.includes('b') && k === state.base ? ' on' : ''}" ${allowed(k) ? '' : 'disabled'}>${l}</button>`).join('');
    panel.querySelector('.calc-note').innerHTML = state.mode === 'comp'
      ? 'logₐb: type log(2,256) for log₂256. ×10ˣ: 2×10⁹ is 2 ×10ˣ 9.'
      : 'Whole numbers in 32-bit 2\'s complement, like the real calculator. For an 8-bit answer read the last 8 bits. Neg = 2\'s complement, Not = 1\'s complement.';
  }
  function setMode(m) { state.mode = m; state.toks = []; state.res = ''; state.err = ''; state.shown = false; draw(); }
  function evaluate() {
    if (!state.toks.length) return;
    try {
      if (state.mode === 'comp') { const v = evalComp(state.toks); state.ans.comp = v; state.res = fmtComp(v); }
      else { const v = evalBase(state.toks); state.ans.base = v; state.res = fmtBase(v, state.base); }
      state.err = ''; state.shown = true;
    } catch (e) { state.err = e === 'math' ? 'Math ERROR' : 'Syntax ERROR'; state.res = ''; }
  }
  function press(k) {
    if (!k || !allowed(k)) return;
    if (state.err) state.err = '';
    if (k === 'AC') { state.toks = []; state.res = ''; state.shown = false; }
    else if (k === 'DEL') { if (state.shown) state.shown = false; state.toks.pop(); }
    else if (k === '=') evaluate();
    else if (BASES[k]) {                    // like the real calculator: a base key converts the answer on screen
      state.base = k;
      if (state.shown) state.res = fmtBase(state.ans.base, k);
    } else {
      const tok = k === '−n' ? '−' : k;
      if (state.shown) {                    // after "=", an operator continues from Ans, a number starts again
        state.toks = /^([+−×÷^²]|⁻¹|and|or|xor|E)$/.test(k) && !(state.mode === 'base' && k === 'E') ? ['Ans'] : [];
        state.shown = false; state.res = '';
      }
      state.toks.push(tok);
    }
    draw();
  }
  function onKey(e) {
    e.stopPropagation();                    // keep the test's own shortcuts (A–D, arrows, F) away while typing here
    const k = e.key, base = state.mode === 'base';
    const map = { '+': '+', '-': '−', '*': '×', '/': '÷', '(': '(', ')': ')', '^': '^', ',': ',', '.': '.', Enter: '=', '=': '=', Backspace: 'DEL', Delete: 'AC' };
    if (k === 'Escape') { close(); return; }
    let key = map[k];
    if (!key && /^[0-9]$/.test(k)) key = k;
    if (!key && base && /^[a-fA-F]$/.test(k)) key = k.toUpperCase();
    if (key) { e.preventDefault(); press(key); }
  }
  function open() { if (!panel) build(); panel.hidden = false; panel.focus(); sync(); }
  function close() { if (panel) panel.hidden = true; sync(); }
  function sync() { document.querySelectorAll('[data-calc]').forEach(b => b.classList.toggle('on', !!panel && !panel.hidden)); }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-calc]');
    if (!b) return;
    e.preventDefault();
    if (panel && !panel.hidden) close(); else open();
  });
  window.SciCalc = { open, close, sync, button: () => '<button type="button" class="calc-btn" data-calc title="Scientific calculator">🖩 Calculator</button>',
    _test: { evalComp, evalBase, fmtComp, fmtBase, state } };
})();
