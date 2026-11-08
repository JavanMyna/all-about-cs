# CCA101 Prep

Study site for CCA101 / CPT111 Principles of Programming:

- **Material**: notes condensed from the lecture slides, with runnable examples ("Try it").
- **Test 1 Mock**: the format of the 2025/26 past Test 1: Section A = 10 single-answer questions (2 marks each), Section B = 10 select-one-or-more (3 marks each), Section C = 3 CodeRunner programs (15, 15, 20), 100 marks in 1 hour, with a notice that the questions are only possible questions from the slides. Bank of 405 questions (`data/quiz.js`, `quiz-more.js`, `quiz-test1.js`, `quiz-extra.js` and the 20 past-paper questions in `quiz-past.js`); every option of every question has its own explanation (`data/quiz-why.js`, or `w` in the question). The three past-paper programs are in `data/problems-past.js`. Practice by topic as well.
- **ProgrAss 1**: 134 CodeRunner-style problems, including 4 in the style of the past Test 1 coding questions (`data/problems-past.js`), 38 long, hard assessment-style ones (`data/problems-hard.js`, `data/problems-hard2.js`) and 15 Extreme story-style programs (`data/problems-extreme.js`), with 10 tests each (extra hidden tests are in `data/tests-more.js`), including a 20-question "Step by step" set (`data/problems-new.js`) that goes from easy to hard across Weeks 2–5. A partial program, computer-generated variables, Precheck / Check, hidden tests (shown in full once you pass), a penalty regime and plain-English hints for compiler errors. Includes a timed mock: 5 questions (2 easy, 1 medium, 2 hard) in 1 hour. Like the course CodeRunner, an unused variable is a compile error (`-Werror=unused-variable`).
- **Question generator**: endless new CodeRunner questions (10 tests each) from 10 question types (tiered pricing, digit manipulation, ranges, series, nested-loop patterns, classification, unit conversion, sentinel loops, number properties, switch menus). Each question has a shareable code such as `digits-482913`. The mock can use generated questions too.
- **Week 6 lab** (`data/problems-week6.js`): 12 loop questions (Loop Part 2 and Past Programming Assessment Part 2) and 10 basic file processing questions. File questions give each test its input files (`files`) and list the files the program must write (`outFiles`); `assets/build-source.js` adds a small helper after the student's program that creates those files before `main()` and prints the output files after it, so they are checked too. File questions are left out of the ProgrAss mock (they are Test 1 material).
- **Exam mode** (`assets/lockdown.js`): while the Test 1 mock or the ProgrAss mock is running, copy / cut / paste, right-click, drag and drop and print / save / view-source / developer-tools shortcuts are blocked; leaving the window, leaving full screen or opening another page shows a warning and is recorded in the result. Change the warning texts in `MESSAGES`.
- **Scratchpad**: run any C++ program with stdin.

To add a question type, add a `family({...})` block in `assets/generator.js`. Its `make(R)` returns the description, template, tests (with `expected` computed in JS) and the C++ model answer.

It is a static site (plain HTML/JS, no build step).

## Where the C++ code runs

Everyone uses the same engine: real **g++ 13** on [Compiler Explorer](https://godbolt.org). Code is sent to godbolt.org when you press Run / Precheck / Check, so an internet connection is needed.

Only if godbolt.org cannot be reached at all does the site fall back to the bundled [JSCPP](https://github.com/felixhao28/JSCPP) interpreter (`vendor/jscpp.bundle.js`), and it says so on screen. JSCPP is a simplified C++ (no `std::string`).

## Publish on GitHub Pages

1. Push the contents of this folder to a GitHub repository (the `index.html` must be at the repo root, or in `/docs`).
2. Repository **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder `/ (root)`.
3. The site appears at `https://<username>.github.io/<repo>/` after a minute.

## Run it locally

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
```

## Adding content

- **Notes**: `data/material.js`. Replace the `week6` placeholder topic or append a new one. Code inside `<pre class="code">` that has `int main(` gets a "Try it" button. Escape `<` as `&lt;`.
- **Quiz questions**: `data/quiz.js` and `data/quiz-more.js`. `t` = topic id from material.js, `a` = indexes of correct options, `m: true` for "select one or more".
- **Coding problems**: `data/problems.js` and `data/problems-more.js`. The template uses `{{VARS}}` (per-test variables) and `{{ANSWER}}` (student code).
  Then add the expected output of every test to `data/expected.js` under the problem id, in the same order as `tests`.
  An easy way to get it: paste the full program (template + model answer) into the Playground, run it, and copy the output.
