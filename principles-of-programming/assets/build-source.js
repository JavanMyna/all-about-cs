// Builds the full C++ program for a problem + test case + student answer.
// Shared by the problem page and the runner.
// File questions: test.files = { "numbers.txt": "2 3 5\n" } are created before main() runs, and
// problem.outFiles = ["even.txt"] are printed after main() ends (under a "--- even.txt ---" line),
// so the files a program writes are checked like normal output. The extra code goes after the
// student's program, so compiler line numbers do not change.
window.buildSource = function (problem, test, answer) {
  var body = String(answer || '').replace(/\r\n/g, '\n').split('\n')
    .map(function (l) { return l.length ? '    ' + l : l; }).join('\n');
  var src = problem.template
    .replace('{{VARS}}', function () { return test.vars || ''; })
    .replace('{{ANSWER}}', function () { return body; });
  return src + window.fileHarness(test.files, problem.outFiles);
};

// C++ string literal for any text
function cppString(s) {
  return '"' + String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r?\n/g, '\\n') + '"';
}

window.fileHarness = function (files, outFiles) {
  var names = Object.keys(files || {});
  outFiles = outFiles || [];
  if (!names.length && !outFiles.length) return '';
  var make = names.map(function (n) {
    return '        { std::ofstream f(' + cppString(n) + '); f << ' + cppString(files[n]) + '; }';
  }).join('\n');
  var show = outFiles.map(function (n) {
    return '        show(' + cppString(n) + ');';
  }).join('\n');
  return '\n\n// ---- added by the site: makes the input files before main() and shows the output files after it ----\n' +
    '#include <fstream>\n#include <iostream>\n' +
    'namespace cca_site_files {\n' +
    'struct Harness {\n' +
    '    static void show(const char* name) {\n' +
    '        std::ifstream f(name);\n' +
    '        std::cout << "--- " << name << " ---" << std::endl;\n' +
    '        if (!f) { std::cout << "(file not created)" << std::endl; return; }\n' +
    '        char c; bool last = true;\n' +
    '        while (f.get(c)) { std::cout << c; last = (c == \'\\n\'); }\n' +
    '        if (!last) std::cout << std::endl;\n' +
    '    }\n' +
    '    Harness() {\n' + make + '\n    }\n' +
    '    ~Harness() {\n        std::cout.clear();\n' + show + '\n    }\n' +
    '} harness;\n' +
    '}\n';
};

// CodeRunner-style comparison: ignore \r, trailing spaces on each line and trailing blank lines.
window.normalizeOutput = function (s) {
  return String(s || '').replace(/\r\n?/g, '\n').split('\n')
    .map(function (l) { return l.replace(/[ \t]+$/, ''); }).join('\n').replace(/\n+$/, '');
};
