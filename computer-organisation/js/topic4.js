/* ============ topic4.js — Topic 4: Digital Logic (Part 1), after Test 1 ============
   Written from the Topic 4 slides (Stallings ch. 11). Loaded after notes.js, bank.js and why.js, it adds:
   the Topic 4 notes (TOPICS), concept questions (BANK, each with w = why each option is right or wrong),
   calculation generators (GEN) and a Topic 4 question bank paper (DYNAMIC).
   Topic 4 is not in Test 1, so the past paper and the Random Test 1 are unchanged. */

/* ---------------- notes ---------------- */
TOPICS.push({
  id: 't4', num: 4, title: 'Digital Logic', sub: 'Boolean algebra, gates, SOP / POS, Karnaugh maps, multiplexers, decoders, ROM, adders',
  weight: 'After Test 1 · Digital Logic Part 1',
  sections: [
    { id: 'bool', title: 'Boolean algebra', html: `
      <p>Digital computers store and process <b>binary</b> data. Boolean algebra (George Boole, 1847 and 1854) is the mathematics behind it: it is used to <b>describe</b> what a circuit does and to <b>simplify</b> it.</p>
      <p>A Boolean variable is either <b>1</b> (true, high voltage, on) or <b>0</b> (false, low voltage, off).</p>
      ${T(['Operation', 'Written', 'Output is 1 when'], [['AND', 'A · B or AB', '<b>both</b> inputs are 1'], ['OR', 'A + B', '<b>at least one</b> input is 1'], ['NOT', "A' or Ā", 'the input is 0 (it reverses 0 and 1)']])}
      <p>Order of work: NOT first, then AND, then OR (like ×before + in normal maths).</p>
      <div class="example"><div class="ex-h">Slide example</div><p class="mono">D = A + B'C</p><p>D = 1 when A = 1, <b>or</b> when both B = 0 and C = 1.</p></div>
      <p>A <b>truth table</b> lists the output for every combination of inputs. n inputs give <b>2<sup>n</sup> rows</b> (2 inputs → 4 rows, 3 → 8, 4 → 16).</p>
      ${check('How many rows does the truth table of a 4-input function have?', '2<sup>4</sup> = 16 rows.')}
    ` },
    { id: 'laws', title: 'Laws and simplifying', html: `
      ${T(['Law', 'AND form', 'OR form', 'In words'], [
        ['Commutative', 'A·B = B·A', 'A + B = B + A', 'order does not matter'],
        ['Identity', 'A·1 = A', 'A + 0 = A', 'some values leave A unchanged'],
        ['Dominance (null)', 'A·0 = 0', 'A + 1 = 1', 'one value wins'],
        ['Idempotent', 'A·A = A', 'A + A = A', 'repeating A changes nothing'],
        ['Associative', 'A·(B·C) = (A·B)·C', 'A + (B + C) = (A + B) + C', 'grouping does not matter'],
        ['Complement', "A·A' = 0", "A + A' = 1", 'A and NOT A are opposites'],
        ['Distributive', 'A·(B + C) = A·B + A·C', 'A + B·C = (A + B)·(A + C)', 'expand or factor'],
        ["De Morgan", "(A·B)' = A' + B'", "(A + B)' = A'·B'", 'break the bar, change the operation']])}
      ${key("De Morgan: <b>break the bar = change the operation</b>, and complement each input. (MNOP)' = M' + N' + O' + P'.")}
      <div class="example"><div class="ex-h">Simplify F = A + (A·B)'</div>
        <p class="mono">F = A + A' + B'      De Morgan<br>F = (A + A') + B' = 1 + B'   Complement<br>F = 1               Dominance</p></div>
      <div class="example"><div class="ex-h">Factor and use X + X' = 1</div>
        <p class="mono">A'B'C' + AB'C' + ABC' + A'B'C + AB'C + ABC<br>= B'C'(A' + A) + AB(C' + C) + B'C(A' + A)<br>= B'C' + AB + B'C = B'(C' + C) + AB<br>= <b>B' + AB</b>   (and B' + AB = A + B')</p></div>
      ${warn("Slide 23 simplifies A'BC + AB'C' + A'B'C' + AB'C + A'BC' to A' + B'C'. That is <b>wrong</b>: A' + B'C' is also 1 for A'B'C, which is not in the expression. The step A'B + AB' = A'(B + B') is not allowed. The right answer is the one in Quick Activity #1: <b>A'B + AB' + B'C'</b>.")}
      ${tip('Check any simplification with a truth table, or with the K-map below. Both sides must give the same output on every row.')}
      ${check("Simplify (A + D)(D + A)(B + E + A)(A + E + B)(A + B + C).", "Commutative: (D + A) = (A + D) and (A + E + B) = (B + E + A). Idempotent: X·X = X. Result: (A + D)(A + B + E)(A + B + C).")}
    ` },
    { id: 'gates', title: 'Gates and functionally complete sets', html: `
      <p>A <b>gate</b> is an electronic circuit whose output is a simple Boolean operation on its inputs. It is the basic building block of every digital circuit.</p>
      ${T(['Gate', 'Algebra', 'Output is 1 when'], [
        ['AND', 'F = A·B', 'all inputs are 1'], ['OR', 'F = A + B', 'any input is 1'], ['NOT', "F = A'", 'the input is 0'],
        ['NAND', "F = (A·B)'", 'NOT all inputs are 1 (0 only when all are 1)'], ['NOR', "F = (A + B)'", 'all inputs are 0'],
        ['XOR', 'F = A ⊕ B', 'the inputs are <b>different</b>'], ['XNOR', "F = (A ⊕ B)'", 'the inputs are the same']])}
      ${T(['A B', 'AND', 'OR', 'NAND', 'NOR', 'XOR'], [['0 0', '0', '0', '1', '1', '0'], ['0 1', '0', '1', '1', '0', '1'], ['1 0', '0', '1', '1', '0', '1'], ['1 1', '1', '1', '0', '0', '0']])}
      <h4>Functionally complete sets</h4>
      <p>Any Boolean function can be built using only the gates in one of these sets. Using only one or two gate types makes design and fabrication simpler.</p>
      <ul><li>{AND, OR, NOT}</li><li>{AND, NOT}</li><li>{OR, NOT}</li><li>{NAND}</li><li>{NOR}</li></ul>
      <p>Why {AND, NOT} is enough: by De Morgan, <span class="mono">A + B = (A'·B')'</span>, so OR can be built from AND and NOT.</p>
      ${T(['Build', 'With NAND only', 'With NOR only'], [["NOT A", "(A·A)'", "(A + A)'"], ['A AND B', "((A·B)')' = NAND then NOT", "(A' + B')' = NOR of the two NOTs"], ['A OR B', "(A'·B')' = NAND of the two NOTs", "((A + B)')' = NOR then NOT"]])}
      ${check("Which set is NOT functionally complete: {AND, OR}, {NAND}, {OR, NOT}?", "{AND, OR}: you can never make NOT from AND and OR alone.")}
    ` },
    { id: 'sop', title: 'Combinational circuits: SOP and POS', html: `
      <p>A <b>combinational circuit</b> is a set of connected gates whose output at any time depends <b>only on the inputs at that time</b> (after a short gate delay). It has n inputs and m outputs and can be described in three ways: a <b>truth table</b>, <b>graphical symbols</b> (the gate diagram) or <b>Boolean equations</b>.</p>
      ${T(['Form', 'Built from', 'Shape'], [['<b>Sum of Products (SOP)</b>', 'the rows where the output is <b>1</b>, one AND term per 1', '(·) + (·) + (·)  e.g. AB + A\'C + BC'], ['<b>Product of Sums (POS)</b>', 'the rows where the output is <b>0</b>, one OR term per 0', '(+)·(+)·(+)  e.g. (A + B)(A\' + C)']])}
      <div class="example"><div class="ex-h">Quick Activity #2: output 1 for ABC = 010, 011, 111</div>
        <p class="mono">SOP: F = A'BC' + A'BC + ABC<br>POS: F = (A + B + C)(A + B + C')(A' + B + C)(A' + B + C')(A' + B' + C)</p>
        <p>For SOP, write each 1-row as a product: a 1 is the variable, a 0 is its NOT. For POS, write each 0-row as a sum: a 0 is the variable, a 1 is its NOT (De Morgan of the 0-rows). Both simplify to <b>A'B + BC</b>.</p></div>
      <p><b>SOP or POS?</b> SOP has one term per 1 and POS one term per 0, but a simpler expression than either is often possible (fewer gates). It may also be better to use only one gate type (NAND or NOR).</p>
      ${tip("NAND–NAND = SOP: an SOP built with AND then OR can be redrawn with NAND gates only (De Morgan). NOR–NOR does the same for POS. It is not always the fewest gates, but the <b>regularity</b> simplifies manufacturing.")}
    ` },
    { id: 'kmap', title: 'Karnaugh maps', html: `
      <p>A K-map is a grid of 2<sup>n</sup> squares (2 variables → 4, 3 → 8, 4 → 16), one square per input combination. It is practical for up to <b>four</b> variables (five or six need 3-D/4-D maps).</p>
      ${key('Label the rows and columns in the order <b>00, 01, 11, 10</b>. Then any two neighbouring squares differ in only <b>one</b> variable, and the edges <b>wrap around</b>.')}
      <ol>
        <li>Put a 1 in the square of every product term (expand the expression to canonical form first: every term must contain every variable).</li>
        <li>Circle the <b>largest</b> blocks of 1s whose size is a power of 2: 8, 4, 2, then 1. Blocks may wrap around the edges and may overlap.</li>
        <li>Use as <b>few</b> blocks as possible, but cover every 1 at least once. A block completely covered by others is dropped.</li>
        <li>Each block becomes one term: keep only the variables that do <b>not</b> change inside it. A block of 2 drops 1 variable, 4 drops 2, 8 drops 3, 16 drops all 4.</li>
      </ol>
      <div class="example"><div class="ex-h">A'BC' + A'BC + AB'C' + AB'C (010, 011, 100, 101)</div>
        <div class="tbl-wrap"><table class="tbl kmap"><thead><tr><th>A \\ BC</th><th>00</th><th>01</th><th>11</th><th>10</th></tr></thead><tbody><tr><td><b>0</b></td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td><b>1</b></td><td>1</td><td>1</td><td>0</td><td>0</td></tr></tbody></table></div>
        <p>Pair 1: row A = 0, BC = 11 and 10 → B stays 1, C changes → <b>A'B</b>. Pair 2: row A = 1, BC = 00 and 01 → <b>AB'</b>. So F = <b>A'B + AB'</b>.</p></div>
      <div class="example"><div class="ex-h">Quick Activity #3</div>
        <p class="mono">A'B'C' + A'B'C + AB'C' + AB'C  → F = B'   (a block of 4: only B stays 0)<br>A'B'C + A'BC' + ABC' + AB'C' → F = BC' + AC' + A'B'C   (AC' wraps around)</p></div>
      <p><b>Don't care</b> (d): an input combination that never happens (e.g. 1010–1111 in a BCD digit). Treat d as 1 if it makes a bigger block, otherwise as 0. A group of only d's is never needed.</p>
      ${warn('Never group 3 or 6 squares, and never group diagonally. Group sizes are powers of 2, made of neighbours.')}
    ` },
    { id: 'mux', title: 'Multiplexers and decoders', html: `
      <h4>Multiplexer (MUX): many inputs → one output</h4>
      <p>A multiplexer connects <b>one of several inputs</b> to a single output. The <b>select lines</b> choose which one. A 4-to-1 MUX has inputs D0–D3 and <b>2</b> select lines (S1 S0 = 00 → D0, 01 → D1, 10 → D2, 11 → D3). In general 2<sup>k</sup> inputs need <b>k</b> select lines (8-to-1 → 3, 16-to-1 → 4).</p>
      <p>Inside, each input goes to an AND gate with its select pattern; three AND gates output 0 and the selected one passes its input to the OR gate.</p>
      <p><b>Use in the CPU:</b> the address loaded into the Program Counter can come from a <b>binary counter</b> (increment to the next instruction), the <b>instruction register</b> (direct branch) or the <b>ALU</b> (branch with a displacement). A MUX picks one.</p>
      <h4>Decoder: n inputs → one of 2<sup>n</sup> outputs</h4>
      <p>A decoder has n input lines and up to 2<sup>n</sup> output lines, and only <b>one output is asserted</b> at a time, depending on the input pattern (3-to-8, 2-to-4).</p>
      <div class="example"><div class="ex-h">Address decoding: 1 KB from four 256 × 8 RAM chips</div>
        <p>Each chip has 256 = 2<sup>8</sup> words, so it needs <b>8</b> address lines. The <b>2</b> high-order bits go into a <b>2-to-4 decoder</b> that selects one of the four chips. Total: 8 + 2 = <b>10</b> address bits (2<sup>10</sup> = 1024). Chip 0 holds addresses 0–255, chip 1 256–511, chip 2 512–767, chip 3 768–1023.</p></div>
      <p><b>Demultiplexer:</b> add one data input to a decoder (AND it with every output). The n inputs act as an address that routes the single data input to one of 2<sup>n</sup> outputs. A MUX is many-to-one; a DEMUX is one-to-many.</p>
      ${check('How many select lines does a 16-to-1 multiplexer need?', '2<sup>4</sup> = 16, so 4 select lines.')}
    ` },
    { id: 'rom', title: 'ROM and adders', html: `
      <h4>Read-only memory</h4>
      <p>Combinational circuits are called <b>memoryless</b>: the output depends only on the current input, and nothing is stored. ROM is an exception that proves the point: its contents never change, so each address always gives the same data, and that can be built from combinational logic. A ROM can be made from a <b>decoder</b> (the address selects one word line) and <b>OR gates</b> (one per output bit).</p>
      <p>Example: a <b>64-bit ROM</b> of 16 words × 4 bits has <b>4 address inputs</b> (2<sup>4</sup> = 16) and 4 data outputs.</p>
      <h4>Adders</h4>
      ${T(['A', 'B', 'Sum', 'Carry'], [['0', '0', '0', '0'], ['0', '1', '1', '0'], ['1', '0', '1', '0'], ['1', '1', '0', '1']])}
      <p><b>Half adder</b> (2 inputs): Sum = A ⊕ B, Carry = A·B.</p>
      <p><b>Full adder</b> (3 inputs: A, B and the carry-in C from the lower bit): <span class="mono">Sum = A'B'C + A'BC' + AB'C' + ABC</span> (Sum is 1 when an odd number of inputs are 1, i.e. A ⊕ B ⊕ C) and <span class="mono">Carry = AB + AC + BC</span> (1 when at least two inputs are 1).</p>
      <p>An n-bit adder chains n full adders: the carry out of each goes into the next (<b>ripple carry</b>). Each stage must wait for the carry from below, so the delay grows from the least significant to the most significant bit and can be large for wide adders. <b>Carry lookahead</b> works out each carry directly from the inputs instead of waiting for every stage.</p>
      ${check('A full adder has A = 1, B = 1, C = 1. What are Sum and Carry?', 'Three 1s: 1 + 1 + 1 = 3 = 11 in binary, so Sum = 1 and Carry = 1.')}
    ` },
  ],
});

/* ---------------- concept questions (w = why each option, in the order written) ---------------- */
const BANK_T4 = [
  { q: 'Boolean algebra was first published by:', o: ['George Boole', 'John von Neumann', 'Gordon Moore', 'Claude Shannon'], a: 0, e: 'George Boole published his symbolic logic in 1847 and expanded it in 1854. It is the mathematical foundation of digital circuits.',
    w: ['Correct. George Boole published it in 1847 and expanded it in 1854.', 'Von Neumann designed the IAS computer (the stored-program concept).', 'Gordon Moore is known for Moore\'s Law about transistor counts.', 'Claude Shannon later applied Boolean algebra to switching circuits (1938), but he did not invent it.'] },
  { q: 'A Boolean variable can take the value:', o: ['Only 1 (true) or 0 (false)', 'Any whole number', 'Any digit from 0 to 9', 'Any real number'], a: 0, e: '1 = true, high voltage, on. 0 = false, low voltage, off.',
    w: ['Correct. A Boolean variable is either 1 (true, high, on) or 0 (false, low, off).', 'Whole numbers are not Boolean values; there are only two values.', '0–9 are decimal digits.', 'Real numbers are not Boolean values.'] },
  { q: 'The three basic operations of Boolean algebra are:', o: ['AND, OR and NOT', 'NAND, NOR and XOR', 'Add, subtract and multiply', 'AND, XOR and NOT'], a: 0, e: 'AND, OR, NOT. Every other gate can be built from these.',
    w: ['Correct. The slides list AND, OR and NOT as the three basic operations.', 'NAND, NOR and XOR are extra gates built from the basic operations.', 'These are arithmetic operations, not Boolean ones.', 'XOR is not one of the three basic operations; OR is.'] },
  { q: 'The output of an AND operation is 1 when:', o: ['Both inputs are 1', 'At least one input is 1', 'The inputs are different', 'Both inputs are 0'], a: 0, e: 'AND: both inputs must be 1.',
    w: ['Correct. AND gives 1 only if every input is 1.', 'At least one input being 1 is OR.', 'Different inputs giving 1 is XOR.', 'Both inputs 0 giving 1 is NOR.'] },
  { q: 'The output of an OR operation is 1 when:', o: ['At least one input is 1', 'Both inputs are 1', 'Exactly one input is 1', 'Both inputs are 0'], a: 0, e: 'OR: at least one input is 1.',
    w: ['Correct. OR gives 1 if any input is 1.', 'Both inputs 1 is only one of the cases; that alone describes AND.', 'Exactly one input 1 describes XOR. OR is also 1 when both are 1.', 'OR gives 0 when both inputs are 0.'] },
  { q: 'D = A + B\'C. For which inputs is D = 1?', o: ['When A = 1, or when both B = 0 and C = 1', 'Only when A = 1 and B = 1', 'When B = 1 and C = 0', 'Only when all three are 1'], a: 0, e: 'The slide example: OR of A with (NOT B AND C).',
    w: ['Correct. D = A OR (B\' AND C), so D = 1 if A = 1, or if B = 0 and C = 1.', 'That would be the term AB. The expression uses OR and B\'.', 'B\'C needs B = 0 and C = 1, the opposite of this.', 'With A = B = C = 1, D is 1, but it is also 1 in other cases.'] },
  { q: 'A truth table for a function with 3 inputs has:', o: ['8 rows', '3 rows', '6 rows', '9 rows'], a: 0, e: 'n inputs → 2ⁿ rows. 2³ = 8.',
    w: ['Correct. 2³ = 8 combinations of three inputs.', '3 is the number of inputs, not combinations.', '6 is 2 × 3. The rows double with every input.', '9 is 3². The base is 2, not 3.'] },
  { q: 'A + 1 =', o: ['1', 'A', '0', 'A\''], a: 0, e: 'Dominance (null) law: anything OR 1 is 1.',
    w: ['Correct. OR with 1 is always 1, whatever A is.', 'A + 0 = A (identity). With 1 the result is 1.', 'OR with 1 can never be 0.', 'A\' is the complement, not related here.'] },
  { q: 'A · 0 =', o: ['0', 'A', '1', 'A\''], a: 0, e: 'Dominance law: anything AND 0 is 0.',
    w: ['Correct. AND with 0 is always 0.', 'A · 1 = A (identity). With 0 the result is 0.', 'AND with 0 can never be 1.', 'A\' is the complement, not related here.'] },
  { q: 'A + A\' =', o: ['1', '0', 'A', 'A\''], a: 0, e: 'Complement law: A and NOT A are opposites, so one of them is always 1.',
    w: ['Correct. Either A or A\' is 1, so the OR is always 1.', 'A · A\' = 0. With OR the result is 1.', 'The result does not depend on A.', 'The result does not depend on A.'] },
  { q: 'A · A =', o: ['A', '1', '0', 'A²'], a: 0, e: 'Idempotent law: repeating A changes nothing.',
    w: ['Correct. 0·0 = 0 and 1·1 = 1, so A·A = A.', 'Only if A = 1. In general A·A = A.', 'Only if A = 0. In general A·A = A.', 'Boolean algebra has no powers; A·A is just A.'] },
  { q: 'A · (B + C) = A·B + A·C is the:', o: ['Distributive law', 'Associative law', 'Commutative law', 'De Morgan\'s theorem'], a: 0, e: 'Distributive: expand or factor an expression.',
    w: ['Correct. It expands A over the bracket, like normal maths.', 'Associative is about grouping: A·(B·C) = (A·B)·C.', 'Commutative is about order: A·B = B·A.', 'De Morgan is about complementing a whole AND or OR.'] },
  { q: 'Which is the second distributive law (the one that has no match in normal maths)?', o: ['A + B·C = (A + B)·(A + C)', 'A · (B + C) = A·B + A·C', 'A + B = B + A', '(A + B)\' = A\'·B\''], a: 0, e: 'OR distributes over AND in Boolean algebra.',
    w: ['Correct. In Boolean algebra OR also distributes over AND. In normal maths a + bc ≠ (a + b)(a + c).', 'This is the first distributive law, which is the same as normal maths.', 'This is the commutative law.', 'This is De Morgan\'s theorem.'] },
  { q: 'By De Morgan\'s theorem, (A · B)\' equals:', o: ['A\' + B\'', 'A\' · B\'', 'A + B', '(A + B)\''], a: 0, e: 'De Morgan: break the bar, change the operation (· → +), complement each input.',
    w: ['Correct. De Morgan: NOT(A AND B) = NOT A OR NOT B.', 'A\'·B\' = (A + B)\'. That is the other De Morgan law.', 'The inputs must be complemented.', '(A + B)\' = A\'·B\', which is different from (A·B)\'.'] },
  { q: 'By De Morgan\'s theorem, (A + B)\' equals:', o: ['A\' · B\'', 'A\' + B\'', 'A · B', '(A · B)\''], a: 0, e: 'De Morgan: NOT(A OR B) = NOT A AND NOT B.',
    w: ['Correct. Break the bar and change + to ·.', 'A\' + B\' = (A·B)\', the other De Morgan law.', 'The inputs must be complemented.', '(A·B)\' = A\' + B\', which is different.'] },
  { q: 'Using De Morgan\'s theorem, (MNOP)\' =', o: ['M\' + N\' + O\' + P\'', 'M\'N\'O\'P\'', 'M + N + O + P', '(M + N + O + P)\''], a: 0, e: 'The slide example: break the bar and change every AND to OR.',
    w: ['Correct. NOT of an AND becomes the OR of the NOTs.', 'This keeps the AND. The operation must change to OR.', 'Each variable must be complemented.', 'This equals M\'N\'O\'P\', which is not the same.'] },
  { q: 'Simplify F = A + (A·B)\':', o: ['1', 'A', 'A + B', '0'], a: 0, e: 'De Morgan: A + A\' + B\'. Complement: 1 + B\'. Dominance: 1.',
    w: ['Correct. A + A\' + B\' = 1 + B\' = 1.', 'The term (AB)\' adds A\', and A + A\' = 1.', 'De Morgan gives A\' + B\', not B.', 'An OR containing A + A\' can never be 0.'] },
  { q: 'Simplify A\'B\'C\' + AB\'C\' + ABC\' + A\'B\'C + AB\'C + ABC:', o: ['B\' + AB', 'B\'', 'AB', 'A\' + B'], a: 0, e: 'B\'C\'(A\' + A) + AB(C\' + C) + B\'C(A\' + A) = B\'C\' + AB + B\'C = B\' + AB. (B\' + AB can also be written A + B\'.)',
    w: ['Correct. Factor pairs that differ in one variable: B\'C\' + AB + B\'C, then B\'(C\' + C) + AB = B\' + AB. (It equals A + B\'.)', 'B\' alone misses ABC and ABC\', which are in the expression.', 'AB alone misses the four terms with B\'.', 'A\' + B is 1 for A\'BC, which is not in the expression.'] },
  { q: 'What does A\'BC + AB\'C\' + A\'B\'C\' + AB\'C + A\'BC\' simplify to?', o: ['A\'B + AB\' + B\'C\'', 'A\' + B\'C\'', 'A\'B + AB\'', 'A + B\'C\''], a: 0, e: 'A\'B(C + C\') + AB\'(C\' + C) + B\'C\'(A + A\') = A\'B + AB\' + B\'C\'. Slide 23 wrote A\' + B\'C\', which is wrong.',
    w: ['Correct. Pair the terms: A\'B, AB\', and B\'C\' (from A\'B\'C\' with AB\'C\'). This is the Quick Activity #1 answer.', 'This is the answer printed on slide 23, but it is wrong: A\' + B\'C\' is 1 for A\'B\'C, which is not in the expression. A\'B + AB\' cannot be factored into A\'(B + B\').', 'This misses A\'B\'C\' (000), which is in the expression.', 'A + B\'C\' is 1 for ABC, which is not in the expression.'] },
  { q: 'Simplify (A + D)(D + A)(B + E + A)(A + E + B)(A + B + C) using the commutative and idempotent laws:', o: ['(A + D)(A + B + E)(A + B + C)', '(A + D)(A + B + C)', 'A + B + C + D + E', '(A + D)(B + E)(A + B + C)'], a: 0, e: '(D + A) = (A + D) and (A + E + B) = (B + E + A), so each appears twice; X·X = X removes the copies.',
    w: ['Correct. The repeated brackets are equal (commutative) and X·X = X (idempotent), leaving three brackets.', 'This drops (A + B + E), which is not a repeat of anything.', 'You cannot merge brackets that are multiplied into one big sum.', 'The A inside (A + B + E) cannot be dropped.'] },
  { q: 'A gate is:', o: ['An electronic circuit whose output is a simple Boolean operation on its inputs', 'A memory cell that stores one bit', 'A wire between two chips', 'A program that tests a circuit'], a: 0, e: 'The gate is the fundamental building block of digital logic.',
    w: ['Correct. A gate produces an output that is a Boolean function (AND, OR, …) of its inputs.', 'A memory cell stores a bit; a gate does not store anything.', 'A wire only connects; it does not perform an operation.', 'A test program is software, not a gate.'] },
  { q: 'The output of a NAND gate is 0 only when:', o: ['All its inputs are 1', 'All its inputs are 0', 'Its inputs are different', 'Any input is 1'], a: 0, e: 'NAND = NOT AND. AND is 1 only when all inputs are 1, so NAND is 0 only then.',
    w: ['Correct. NAND is the opposite of AND, so it is 0 only when all inputs are 1.', 'With all inputs 0, NAND gives 1.', 'With different inputs, NAND gives 1.', 'With one input 1 and another 0, NAND gives 1.'] },
  { q: 'The output of a NOR gate is 1 only when:', o: ['All its inputs are 0', 'All its inputs are 1', 'Its inputs are different', 'At least one input is 1'], a: 0, e: 'NOR = NOT OR. OR is 0 only when all inputs are 0, so NOR is 1 only then.',
    w: ['Correct. NOR is the opposite of OR, so it is 1 only when every input is 0.', 'With all inputs 1, NOR gives 0.', 'With different inputs, OR is 1, so NOR is 0.', 'Any input 1 makes OR 1, so NOR is 0.'] },
  { q: 'A 2-input XOR gate gives 1 when:', o: ['The inputs are different', 'The inputs are the same', 'Both inputs are 1', 'Both inputs are 0'], a: 0, e: 'XOR = exclusive OR: 01 → 1, 10 → 1, 00 → 0, 11 → 0.',
    w: ['Correct. XOR is 1 for 01 and 10.', 'Same inputs giving 1 is XNOR.', 'With both inputs 1, XOR gives 0 (that is the "exclusive" part).', 'With both inputs 0, XOR gives 0.'] },
  { q: 'Which single gate type is functionally complete on its own?', o: ['NAND', 'AND', 'OR', 'XOR'], a: 0, e: 'Functionally complete sets: {AND, OR, NOT}, {AND, NOT}, {OR, NOT}, {NAND}, {NOR}.',
    w: ['Correct. Any Boolean function can be built using only NAND gates (NOR also works).', 'AND alone cannot make NOT.', 'OR alone cannot make NOT.', 'XOR is not in the list of functionally complete sets.'] },
  { q: 'Which of these is NOT a functionally complete set?', o: ['{AND, OR}', '{AND, NOT}', '{OR, NOT}', '{NOR}'], a: 0, e: 'Without NOT (or NAND/NOR) you can never invert a signal.',
    w: ['Correct (NOT complete). AND and OR can never produce NOT, so some functions cannot be built.', 'This IS complete: OR = (A\'·B\')\' by De Morgan.', 'This IS complete: AND = (A\' + B\')\' by De Morgan.', 'This IS complete: NOR alone can build NOT, AND and OR.'] },
  { q: 'Using only AND and NOT, A OR B can be written as:', o: ['NOT((NOT A) AND (NOT B))', '(NOT A) AND (NOT B)', 'NOT(A AND B)', 'A AND (NOT B)'], a: 0, e: 'De Morgan: A + B = (A\'·B\')\'. This is why {AND, NOT} is functionally complete.',
    w: ['Correct. By De Morgan, (A\'·B\')\' = A + B.', 'This is A\'B\' = (A + B)\', the NOR, not the OR.', 'This is NAND = A\' + B\'.', 'This is AB\', which is 1 only for A = 1, B = 0.'] },
  { q: 'Joining both inputs of a NAND gate to the same signal A gives:', o: ['NOT A', 'A', '1', '0'], a: 0, e: '(A·A)\' = A\'. This is how NOT is built from NAND.',
    w: ['Correct. (A·A)\' = (A)\' = A\'.', 'A NAND gate inverts, so the output is not A.', 'The output changes with A, so it is not always 1.', 'The output changes with A, so it is not always 0.'] },
  { q: 'Why might a designer build a function using only NAND gates, even if it uses more gates?', o: ['The regularity simplifies the manufacturing process', 'NAND gates use no power', 'It always gives the fewest gates', 'NAND gates store data'], a: 0, e: 'One gate type → regular design, simpler to manufacture.',
    w: ['Correct. The slides say a single gate type may not be minimum-gate, but its regularity simplifies manufacturing.', 'All gates use some power.', 'The slides say it may NOT be the minimum-gate implementation.', 'Gates do not store data.'] },
  { q: 'A combinational circuit is one whose output:', o: ['Depends only on the inputs at that time', 'Depends on past inputs as well', 'Is stored until the next clock pulse', 'Never changes'], a: 0, e: 'Combinational = no memory. Its output follows its current inputs after a short gate delay.',
    w: ['Correct. A combinational circuit has no memory: the output is a function of the present inputs only.', 'Depending on past inputs needs memory; that is a sequential circuit.', 'Storing a value until a clock pulse is what flip-flops (sequential circuits) do.', 'The output changes whenever the inputs change.'] },
  { q: 'Which is NOT one of the three ways to define a combinational circuit?', o: ['A list of the past outputs', 'A truth table', 'Graphical symbols (a gate diagram)', 'Boolean equations'], a: 0, e: 'Truth table, graphical symbols, Boolean equations.',
    w: ['Correct (NOT one of the ways). A combinational circuit has no history, so past outputs do not define it.', 'A truth table IS one of the three ways.', 'Graphical symbols ARE one of the three ways.', 'Boolean equations ARE one of the three ways.'] },
  { q: 'A sum-of-products (SOP) expression has one product term for each:', o: ['Truth-table row where the output is 1', 'Truth-table row where the output is 0', 'Input variable', 'Gate in the circuit'], a: 0, e: 'SOP is built from the rows where the output is 1.',
    w: ['Correct. Each 1-row becomes one AND term, and the terms are ORed.', 'The 0-rows are used for POS.', 'The terms come from rows, not from variables.', 'The terms come from the truth table, not the gates.'] },
  { q: 'A product-of-sums (POS) expression is built from the truth-table rows where the output is:', o: ['0', '1', 'Don\'t care', 'The same as the inputs'], a: 0, e: 'POS: one OR term for each 0.',
    w: ['Correct. Each 0-row gives one OR term, and the terms are ANDed.', 'The 1-rows are used for SOP.', 'Don\'t cares are used for K-map grouping.', 'This is not how POS is formed.'] },
  { q: 'F = AB + A\'C + BC is written in:', o: ['Sum-of-products (SOP) form', 'Product-of-sums (POS) form', 'Neither SOP nor POS', 'Canonical POS form'], a: 0, e: 'Products (AND terms) joined by +: SOP.',
    w: ['Correct. AND terms (AB, A\'C, BC) joined by OR: a sum of products.', 'POS would be sums in brackets joined by AND.', 'It clearly has the SOP shape.', 'It is not POS at all.'] },
  { q: 'The expression (A + B)(A\' + C)(B + C\') is written in:', o: ['Product-of-sums (POS) form', 'Sum-of-products (SOP) form', 'Neither SOP nor POS', 'Karnaugh-map form'], a: 0, e: 'Sums (OR terms) joined by AND: POS.',
    w: ['Correct. OR terms in brackets, multiplied (ANDed) together.', 'SOP would be AND terms joined by +.', 'It clearly has the POS shape.', 'A K-map is a diagram, not an expression form.'] },
  { q: 'A truth table has output 1 only for ABC = 010, 011 and 111. Its SOP expression is:', o: ['A\'BC\' + A\'BC + ABC', 'A\'B\'C + A\'BC\' + AB\'C', '(A + B\' + C)(A + B\' + C\')(A\' + B\' + C\')', 'AB\'C + ABC\' + A\'B\'C\''], a: 0, e: 'Quick Activity #2. Each 1-row becomes a product: 1 = the variable, 0 = its NOT. It simplifies to A\'B + BC.',
    w: ['Correct. 010 → A\'BC\', 011 → A\'BC, 111 → ABC.', 'These terms are 001, 010 and 101, not the given rows.', 'This is a POS built the wrong way, from the 1-rows.', 'These terms are 101, 110 and 000, not the given rows.'] },
  { q: 'In a Karnaugh map, the rows and columns are labelled in the order:', o: ['00, 01, 11, 10', '00, 01, 10, 11', '00, 10, 01, 11', '11, 10, 01, 00 only'], a: 0, e: 'With 00, 01, 11, 10 every neighbour differs in one bit (Gray code order).',
    w: ['Correct. In this order neighbouring squares differ in only one variable.', 'Normal counting order: 01 and 10 differ in two bits, so grouping would be wrong.', 'Here 10 and 01 are next to each other but differ in two bits.', 'The standard order is 00, 01, 11, 10.'] },
  { q: 'Why are K-map squares arranged so that neighbours differ in only one variable?', o: ['So two neighbouring 1s can be merged by eliminating that variable', 'So the map fits on one page', 'So the truth table is shorter', 'So the gates run faster'], a: 0, e: 'XYZ + XYZ\' = XY(Z + Z\') = XY: the changing variable drops out.',
    w: ['Correct. Two adjacent 1s differ in one variable, which disappears when they are combined (X·Y + X·Y\' = X).', 'The size of the page is not the reason.', 'The truth table length is fixed at 2ⁿ rows.', 'The layout of the map does not affect gate speed.'] },
  { q: 'A 4-variable Karnaugh map has:', o: ['16 squares', '8 squares', '4 squares', '32 squares'], a: 0, e: '2⁴ = 16.',
    w: ['Correct. 2⁴ = 16 squares.', '8 squares is a 3-variable map.', '4 squares is a 2-variable map.', '32 would be 5 variables.'] },
  { q: 'In a K-map, a group of 4 adjacent 1s eliminates:', o: ['2 variables', '1 variable', '3 variables', '4 variables'], a: 0, e: 'Group of 2 → drop 1, 4 → drop 2, 8 → drop 3, 16 → drop all 4.',
    w: ['Correct. 4 = 2², so 2 variables change inside the group and drop out.', 'A group of 2 drops 1 variable.', 'A group of 8 drops 3 variables.', 'Only a group of 16 drops all 4 variables.'] },
  { q: 'Which group size is NOT allowed when simplifying with a K-map?', o: ['3 squares', '1 square', '2 squares', '8 squares'], a: 0, e: 'Groups must have 1, 2, 4, 8 or 16 squares (powers of 2).',
    w: ['Correct (not allowed). 3 is not a power of 2, so the variables cannot cancel neatly.', 'A single isolated 1 is grouped on its own.', 'A pair is allowed.', 'A block of 8 is allowed.'] },
  { q: 'Which statement about K-map grouping is correct?', o: ['Groups should be as large as possible and as few as possible, and may wrap around the edges', 'Every 1 must be in exactly one group', 'Groups can be diagonal', 'The edges of the map are never adjacent'], a: 0, e: 'Largest blocks, fewest blocks, every 1 covered at least once; overlap and wrap-around are allowed.',
    w: ['Correct. Make blocks large and few; they may overlap and wrap around the edges.', 'A 1 may be in more than one group (overlapping is allowed).', 'Squares are only adjacent horizontally and vertically, not diagonally.', 'The left and right (and top and bottom) edges wrap around.'] },
  { q: 'A "don\'t care" (d) in a K-map:', o: ['Can be treated as 1 or 0, whichever gives a simpler result', 'Must always be treated as 1', 'Must always be treated as 0', 'Must form a group of its own'], a: 0, e: 'Don\'t cares are input combinations that never occur. They cannot form a group on their own.',
    w: ['Correct. Use d as 1 when it makes a bigger block, otherwise ignore it.', 'You only use a d as 1 when it helps.', 'You may use a d as 1 if it gives a bigger block.', 'A group made only of don\'t cares is never needed.'] },
  { q: 'Simplify A\'BC\' + A\'BC + AB\'C\' + AB\'C with a K-map:', o: ['A\'B + AB\'', 'A\'B\' + AB', 'B + C', 'A\'C + AC\''], a: 0, e: '010, 011 → A\'B. 100, 101 → AB\'. (This is A XOR B.)',
    w: ['Correct. The pair 010/011 gives A\'B and the pair 100/101 gives AB\'.', 'A\'B\' + AB is XNOR: it covers 000, 001, 110, 111, the opposite squares.', 'B + C covers many squares that are 0, such as 001.', 'A\'C + AC\' would cover 001, 011, 100, 110.'] },
  { q: 'Simplify A\'B\'C\' + A\'B\'C + AB\'C\' + AB\'C with a K-map:', o: ['B\'', 'A\'B\' + AB\'', 'C\'', 'A + B\''], a: 0, e: 'The four squares 000, 001, 100, 101 form one block where only B stays the same (0).',
    w: ['Correct. All four terms have B\'; A and C both change, so a block of 4 gives B\'.', 'This is correct but not the simplest: the two pairs join into one block of 4.', 'C\' would cover 010 and 110, which are 0.', 'A + B\' would cover 110 and 111, which are 0.'] },
  { q: 'Simplify A\'B\'C + A\'BC\' + AB\'C + ABC\' with a K-map:', o: ['B\'C + BC\'', 'A\'C + AC\'', 'B + C', 'B\'C\' + BC'], a: 0, e: '001, 101 → B\'C. 010, 110 → BC\'. A drops out of both groups. (B XOR C.)',
    w: ['Correct. 001 with 101 gives B\'C, and 010 with 110 gives BC\'.', 'This would need 001, 011, 100, 110.', 'B + C also covers 011 and 111, which are 0.', 'This is the XNOR of B and C, the opposite squares.'] },
  { q: 'Karnaugh maps are practical for up to about:', o: ['4 variables', '2 variables', '8 variables', '16 variables'], a: 0, e: 'With 5 or more variables the map becomes 3-D or 4-D and cumbersome.',
    w: ['Correct. Beyond 4 variables the map gets cumbersome (5 → two stacked maps, 6 → 4-D).', 'K-maps work well for 3 and 4 variables too.', '8 variables would need 256 squares in many dimensions.', '16 variables is far too many.'] },
  { q: 'A multiplexer:', o: ['Connects one of several inputs to a single output', 'Connects one input to several outputs at once', 'Stores the selected input', 'Adds its inputs together'], a: 0, e: 'MUX: many-to-one. The select lines choose the input.',
    w: ['Correct. The select lines pick one input and pass it to the single output.', 'Routing one input to one of several outputs is a demultiplexer.', 'A MUX is combinational; it does not store anything.', 'A MUX selects; it does not add.'] },
  { q: 'A 4-to-1 multiplexer has how many select lines?', o: ['2', '4', '1', '3'], a: 0, e: '2² = 4, so 2 select lines (S1 S0) choose one of D0–D3.',
    w: ['Correct. Two select bits give 4 combinations (00–11), one per input.', '4 is the number of data inputs, not select lines.', 'One select line can only choose between 2 inputs.', '3 select lines are for an 8-to-1 multiplexer.'] },
  { q: 'In the CPU, a multiplexer can choose where the next Program Counter value comes from. Which is NOT one of the sources in the slides?', o: ['The keyboard buffer', 'A binary counter (increment)', 'The instruction register (direct branch)', 'The ALU output (branch with displacement)'], a: 0, e: 'Sources: binary counter, IR, ALU.',
    w: ['Correct (not a source). The next instruction address never comes from the keyboard.', 'This IS a source: the counter increments the PC to the next instruction.', 'This IS a source: a direct branch takes its address from the IR.', 'This IS a source: a displacement branch computes the address in the ALU.'] },
  { q: 'A decoder with n input lines has at most:', o: ['2ⁿ output lines, only one asserted at a time', 'n output lines, all asserted at once', '2n output lines', 'n² output lines'], a: 0, e: 'Each input pattern asserts exactly one output.',
    w: ['Correct. n inputs have 2ⁿ patterns, one output per pattern, and only one is active.', 'A decoder has more outputs than inputs, and only one is asserted.', 'The outputs grow as 2ⁿ, not 2n.', 'The outputs grow as 2ⁿ, not n².'] },
  { q: 'A 1 KB memory is built from four 256 × 8-bit RAM chips. How many address bits are needed in total?', o: ['10', '8', '2', '12'], a: 0, e: '8 bits select a word inside a chip (2⁸ = 256) and 2 bits select the chip: 8 + 2 = 10 (2¹⁰ = 1024).',
    w: ['Correct. 8 bits inside each chip plus 2 bits to choose the chip = 10 bits (1024 addresses).', '8 bits only address one 256-word chip.', '2 bits only choose the chip.', '12 bits would address 4096 locations.'] },
  { q: 'In that 1 KB memory (four 256 × 8 chips), what selects one of the four chips?', o: ['A 2-to-4 decoder driven by the 2 high-order address bits', 'A 4-to-1 multiplexer driven by the 8 low-order bits', 'A full adder', 'A 3-to-8 decoder'], a: 0, e: 'The 2 high-order bits go into a 2-to-4 decoder; each output enables one chip.',
    w: ['Correct. Two high-order bits → 2-to-4 decoder → one chip enabled.', 'The 8 low-order bits address the word inside the chip, and choosing a chip needs a decoder.', 'An adder does not select chips.', 'A 3-to-8 decoder would choose among 8 chips.'] },
  { q: 'A decoder with an extra data input line that is ANDed with every output acts as a:', o: ['Demultiplexer', 'Multiplexer', 'Full adder', 'ROM'], a: 0, e: 'The inputs act as an address that routes the single data input to one output line.',
    w: ['Correct. One data input is routed to one of 2ⁿ outputs: a demultiplexer.', 'A multiplexer is the opposite: many inputs to one output.', 'An adder adds bits.', 'A ROM is a decoder with OR gates, not with a data input.'] },
  { q: 'Combinational circuits are called "memoryless" because:', o: ['Their output depends only on the current input; no history is kept', 'They lose power when switched off', 'They have no inputs', 'They are made without transistors'], a: 0, e: 'No prior inputs are retained.',
    w: ['Correct. Nothing about earlier inputs is stored; only the present input matters.', 'The word is about storing history, not about power.', 'Combinational circuits do have inputs.', 'They are made of gates, which are built from transistors.'] },
  { q: 'A ROM can be built from combinational logic because:', o: ['Its contents never change, so each address always gives the same data', 'It stores new data on every write', 'It uses flip-flops', 'It has no address lines'], a: 0, e: 'ROM only reads; it can be made from a decoder and OR gates.',
    w: ['Correct. A fixed address → data mapping is just a truth table, which gates can implement.', 'ROM is read-only; nothing new is written.', 'Flip-flops are sequential memory; ROM does not need them.', 'ROM has address lines to choose the word.'] },
  { q: 'A 64-bit ROM organised as 16 words of 4 bits has how many address inputs?', o: ['4', '16', '64', '6'], a: 0, e: '2⁴ = 16 words, so 4 address inputs; 4 data outputs.',
    w: ['Correct. 4 address bits choose one of 2⁴ = 16 words.', '16 is the number of words, not address lines.', '64 is the total number of bits stored.', '6 address bits would give 64 words.'] },
  { q: 'For a half adder (inputs A and B), Sum and Carry are:', o: ['Sum = A ⊕ B, Carry = A·B', 'Sum = A·B, Carry = A ⊕ B', 'Sum = A + B, Carry = A·B', 'Sum = A ⊕ B, Carry = A + B'], a: 0, e: '0+0 = 0, 0+1 = 1, 1+0 = 1, 1+1 = 10 (sum 0, carry 1).',
    w: ['Correct. Sum is 1 when exactly one input is 1 (XOR); Carry is 1 only for 1 + 1 (AND).', 'This swaps the two outputs.', 'With OR, 1 + 1 would give Sum 1, but the sum bit of 1 + 1 is 0.', 'With OR, the carry would be 1 for 0 + 1, which is wrong.'] },
  { q: 'A full adder for one bit of a multi-bit addition has:', o: ['3 inputs (A, B, carry-in) and 2 outputs (Sum, Carry)', '2 inputs and 1 output', '2 inputs and 2 outputs only', '4 inputs and 4 outputs'], a: 0, e: 'Each stage also needs the carry from the lower-order adder.',
    w: ['Correct. A, B and the carry from the lower bit; outputs Sum and Carry-out.', 'Two inputs and one output cannot pass a carry on.', 'Two inputs and two outputs is a half adder.', 'One bit position only has two outputs.'] },
  { q: 'The carry output of a full adder simplifies to:', o: ['AB + AC + BC', 'A ⊕ B ⊕ C', 'ABC', 'A + B + C'], a: 0, e: 'Carry is 1 when at least two of the three inputs are 1.',
    w: ['Correct. Carry = 1 when at least two inputs are 1: AB + AC + BC.', 'A ⊕ B ⊕ C is the Sum output.', 'ABC is only the case where all three are 1.', 'A + B + C would give a carry for a single 1, which is wrong.'] },
  { q: 'In a ripple-carry adder, why does the delay grow for larger numbers of bits?', o: ['Each stage must wait for the carry from the stage below it', 'Each stage stores its result in memory', 'The most significant bit is added first', 'Larger adders use slower gates'], a: 0, e: 'Gate delays accumulate from the least significant to the most significant bit.',
    w: ['Correct. The carry ripples through every stage, so the delays add up.', 'The adder is combinational; it does not store results.', 'Addition starts at the least significant bit.', 'The gates are the same; it is the chain that is slow.'] },
  { q: 'Carry lookahead makes addition faster by:', o: ['Working out each carry directly from the inputs instead of waiting for every stage', 'Adding the bits in BCD', 'Removing the carry altogether', 'Using a multiplexer for each bit'], a: 0, e: 'If the carry can be found without going through all the stages, each sum bit is ready sooner.',
    w: ['Correct. The carries are calculated in parallel from A and B, so no stage waits for the ripple.', 'BCD is a code for decimal digits, not a speed-up.', 'The carry is still needed for correct sums.', 'Multiplexers do not speed up the carry.'] },
  { q: 'Adding the single bits 1 + 1 gives:', o: ['Sum 0, Carry 1', 'Sum 1, Carry 0', 'Sum 1, Carry 1', 'Sum 0, Carry 0'], a: 0, e: '1 + 1 = 2 = 10 in binary.',
    w: ['Correct. 1 + 1 = 10₂: the sum bit is 0 and 1 is carried.', 'Sum 1, Carry 0 is 0 + 1 or 1 + 0.', 'Sum 1, Carry 1 is 1 + 1 + 1 (with a carry-in).', 'Sum 0, Carry 0 is 0 + 0.'] },
];
BANK_T4.forEach(q => { q.t = 4; BANK.push(q); });

/* ---------------- calculation generators ---------------- */
(function () {
  const V = ['A', 'B', 'C'];
  const lit = (i, bit) => V[i] + (bit ? '' : "'");
  const termOf = m => [2, 1, 0].map((s, i) => lit(i, (m >> s) & 1)).join('');
  // cubes: for each variable 0, 1 or - (free); a cube is an implicant if all its minterms are 1s
  const cubes = [];
  for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) for (let c = 0; c < 3; c++) {
    const d = [a, b, c];
    if (d.every(x => x === 2)) continue;
    const ms = [];
    for (let m = 0; m < 8; m++) if ([2, 1, 0].every((s, i) => d[i] === 2 || ((m >> s) & 1) === d[i])) ms.push(m);
    cubes.push({ d, ms, str: d.map((x, i) => x === 2 ? '' : lit(i, x)).join(''), lits: d.filter(x => x !== 2).length });
  }
  function minimalSOP(ones) {
    if (ones.length === 8) return '1';
    if (!ones.length) return '0';
    const set = new Set(ones), all = cubes.filter(c => c.ms.every(m => set.has(m)));
    // prime implicants only: drop any block that sits inside a bigger block of 1s
    const imps = all.filter(c => !all.some(b => b !== c && b.ms.length > c.ms.length && c.ms.every(m => b.ms.includes(m))));
    let best = null;
    for (let mask = 1; mask < (1 << imps.length); mask++) {
      const pick = imps.filter((_, i) => mask >> i & 1);
      if (best && pick.length > best.length) continue;
      const cov = new Set(); pick.forEach(c => c.ms.forEach(m => cov.add(m)));
      if (cov.size !== set.size) continue;
      const cost = pick.length * 10 + pick.reduce((s, c) => s + c.lits, 0);
      if (!best || cost < best.cost) best = Object.assign(pick.slice(), { cost });
    }
    return best.map(c => c.str).sort().join(' + ');
  }
  const mintermsOf = expr => { const out = []; for (let m = 0; m < 8; m++) { const A = m >> 2 & 1, B = m >> 1 & 1, C = m & 1; if (expr(A, B, C)) out.push(m); } return out; };
  const bits3 = m => m.toString(2).padStart(3, '0');
  const kmapTable = ones => `<div class="tbl-wrap"><table class="tbl kmap"><thead><tr><th>A \\ BC</th><th>00</th><th>01</th><th>11</th><th>10</th></tr></thead><tbody>${[0, 1].map(a => `<tr><td><b>${a}</b></td>${[0, 1, 3, 2].map(bc => `<td>${ones.includes(a * 4 + bc) ? '<b>1</b>' : '0'}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  // the minterms a minimal SOP string covers (for explaining a wrong option)
  function covers(sop) {
    if (sop === '1') return [0, 1, 2, 3, 4, 5, 6, 7];
    const terms = sop.split(' + ').map(t => t.match(/[ABC]'?/g));
    return mintermsOf((A, B, C) => terms.some(t => t.every(l => { const v = { A, B, C }[l[0]]; return l[1] ? !v : v; })));
  }

  Object.assign(GEN, {
    kmap3() {
      let ones, ans;
      for (let k = 0; k < 50; k++) {
        ones = shuffleArr([0, 1, 2, 3, 4, 5, 6, 7]).slice(0, rnd(3, 5)).sort((x, y) => x - y);
        ans = minimalSOP(ones);
        if (ans.split(' + ').length <= 3 && ans !== '1') break;
      }
      const cands = shuffleArr([0, 1, 2, 3, 4, 5, 6, 7]).map(m => {
        const o = ones.includes(m) ? ones.filter(x => x !== m) : ones.concat(m).sort((x, y) => x - y);
        return minimalSOP(o);
      }).filter(s => s !== ans && s !== '0' && s !== '1');
      const o = opts4(ans, cands, () => minimalSOP(shuffleArr([0, 1, 2, 3, 4, 5, 6, 7]).slice(0, rnd(2, 5))));
      const w = o.map((s, i) => {
        if (i === 0) return `Correct. The K-map groups give the fewest terms that cover every 1: ${s}.`;
        const c = covers(s), extra = c.filter(m => !ones.includes(m)), miss = ones.filter(m => !c.includes(m));
        const bits = l => l.map(m => termOf(m) + ' (' + bits3(m) + ')').join(', ');
        return extra.length ? `This is also 1 for ${bits(extra)}, but F is 0 there.` : `This misses ${bits(miss)}, where F is 1.`;
      });
      return { t: 4, q: `Use a Karnaugh map to simplify F = ${ones.map(termOf).join(' + ')}`, o, a: 0, w,
        e: `The 1s are at ABC = ${ones.map(bits3).join(', ')}.${kmapTable(ones)}` + (ans.split(' + ').length === ones.length && ans.split(' + ').every(t => t.match(/[ABC]/g).length === 3)
          ? `No two 1s are neighbours on the map (remember the edges wrap round), so nothing can be combined: <b>F = ${ans}</b>.`
          : `Circle the largest blocks (2 or 4 squares, wrapping round the edges) and keep the variables that do not change in each block: <b>F = ${ans}</b>.`) };
    },
    muxSel() {
      const k = rnd(1, 5), n = 2 ** k;
      const o = opts4(String(k), [String(n), String(n / 2), String(k + 1), String(2 * k)], () => String(rnd(1, 8)));
      const w = o.map((s, i) => i === 0 ? `Correct. 2^${k} = ${n}, so ${k} select lines give one pattern per input.` : +s === n ? `${n} is the number of data inputs, not select lines.` : +s > k ? `${s} select lines could choose between ${2 ** +s} inputs, more than needed.` : `${s} select line(s) can only choose between ${2 ** +s} inputs.`);
      return { t: 4, q: `A ${n}-to-1 multiplexer needs how many select lines?`, o, a: 0, w, e: `k select lines choose one of 2ᵏ inputs. 2^${k} = ${n}, so <b>${k}</b>.` };
    },
    decoderOut() {
      const n = rnd(2, 6), N = 2 ** n;
      const o = opts4(String(N), [String(2 * n), String(n * n), String(n + 1), String(N - 1), String(N / 2)], () => String(rnd(2, 70)));
      const w = o.map((s, i) => i === 0 ? `Correct. ${n} inputs have 2^${n} = ${N} patterns, one output each.` : +s === N - 1 ? `${s} forgets the all-zeros pattern; there are 2^${n} patterns including 0.` : +s === N / 2 ? `${s} is 2^${n - 1}, one input too few.` : `${s} is not 2^${n}. The outputs double with every extra input.`);
      return { t: 4, q: `A decoder has ${n} input lines. What is the largest number of output lines it can have?`, o, a: 0, w, e: `n inputs → 2ⁿ outputs, only one asserted at a time: 2^${n} = <b>${N}</b>.` };
    },
    memDecode() {
      const chipK = pick([8, 9, 10, 11, 12]), chips = pick([2, 4, 8]), cb = Math.log2(chips), total = chipK + cb;
      const sz = b => { const v = 2 ** b; return v >= 1024 ? (v / 1024) + 'K' : String(v); };
      const o = opts4(String(total), [String(chipK), String(cb), String(total + 1), String(chipK * chips)], () => String(rnd(4, 20)));
      const w = o.map((s, i) => i === 0 ? `Correct. ${chipK} bits address a word inside a chip and ${cb} bits choose the chip: ${chipK} + ${cb} = ${total}.` : +s === chipK ? `${chipK} bits only address one chip.` : +s === cb ? `${cb} bits only choose the chip.` : `${s} bits would address 2^${s} words, not ${sz(total)} (2^${total}).`);
      return { t: 4, q: `A ${sz(total)}-word memory is built from ${chips} chips of ${sz(chipK)} words each. How many address bits are needed in total?`, o, a: 0, w,
        e: `Each chip has 2^${chipK} = ${sz(chipK)} words → ${chipK} address bits. ${chips} chips → ${cb} more bits into a ${cb}-to-${chips} decoder. Total = <b>${total}</b> (2^${total} = ${sz(total)}).` };
    },
    fullAdder() {
      const A = rnd(0, 1), B = rnd(0, 1), C = rnd(0, 1), s = A ^ B ^ C, c = (A & B) | (A & C) | (B & C);
      const f = (x, y) => `Sum = ${x}, Carry = ${y}`, ok = f(s, c);
      const o = [ok, ...shuffleArr([[0, 0], [0, 1], [1, 0], [1, 1]].map(p => f(p[0], p[1])).filter(x => x !== ok))];
      const ones = A + B + C;
      const w = o.map((x, i) => i === 0 ? `Correct. ${A} + ${B} + ${C} = ${ones} = ${ones.toString(2).padStart(2, '0')} in binary: Sum = ${s}, Carry = ${c}.` : `The inputs add up to ${ones}, which is ${ones.toString(2).padStart(2, '0')} in binary (Carry ${c}, Sum ${s}), not this.`);
      return { t: 4, q: `A full adder has inputs A = ${A}, B = ${B} and carry-in C = ${C}. What are its outputs?`, o, a: 0, w,
        e: `Sum = A ⊕ B ⊕ C = 1 when an odd number of inputs are 1. Carry = AB + AC + BC = 1 when at least two are 1. Here ${ones} input(s) are 1 → <b>${ok}</b>.` };
    },
  });
})();
const GEN_T4 = ['kmap3', 'kmap3', 'kmap3', 'muxSel', 'decoderOut', 'memDecode', 'fullAdder'];

DYNAMIC.push({ id: 'bank4', title: 'Topic 4 question bank', short: 'Topic 4 bank', minutes: 90, shuffle: true,
  build: () => shuffleArr(conceptPool(4).concat(genMany(GEN_T4, 15, new Set(conceptPool(4).map(q => q.q))))),
  blurb: 'Digital Logic (after Test 1): Boolean laws, gates, SOP / POS, K-maps, multiplexers, decoders, ROM and adders, plus 15 new K-map, decoder and adder calculations every time.' });
