/* ============ why.js — why each option is right or wrong, for every fixed question ============
   WHY[question text] = one reason per option, in the order the options are written in tests.js / bank.js
   (not the shuffled order). app.js shows them under the explanation when an answer is revealed. */

const WHY = {
  "Computer architecture mainly refers to:": [
    "Physical components (chips, boards, wires) are the hardware that builds the machine. That is organisation, not architecture.",
    "Correct. Architecture is what the programmer can see: the instruction set, how many bits represent each data type, the I/O mechanisms and the addressing techniques.",
    "Circuit design is about how the logic is built from gates. It is hidden from the programmer, so it belongs to organisation (and to digital design).",
    "Peripheral devices (printer, keyboard) are I/O hardware. Which devices are attached says nothing about the instruction set the programmer uses."],
  "Computer organisation refers to:": [
    "Correct. Organisation is the operational units and their connections that realise the architecture: control signals, interfaces, memory technology. It answers how the features are built.",
    "Software structure is about programs (modules, functions). Computer organisation is about hardware.",
    "User interface design is about screens and menus for users. It has nothing to do with how the hardware is organised.",
    "Instruction set design is architecture (the programmer-visible part), not organisation."],
  "Which of the following is visible to the programmer?": [
    "Bus connections are wiring inside the machine. The programmer never sees them, so they are organisation.",
    "Correct. The instruction set architecture (ISA) is exactly the part of the hardware the programmer and compiler work with: the instructions, registers and addressing modes.",
    "Which memory chips are used (DRAM type, size of each chip) is a hardware choice hidden from the program. It is organisation.",
    "Control signals are generated inside the CPU to drive each step. They are invisible to the programmer, so they are organisation."],
  "In Computer Organisation, the architecture defines ______, meanwhile, organisation defines ______:": [
    "Correct. Architecture says WHAT the computer does (its instructions and features); organisation says HOW the hardware carries those features out.",
    "This is the wrong way round. Organisation is the how and architecture is the what.",
    "Input and output are things a computer does (data movement). They do not describe the difference between architecture and organisation.",
    "Logic and data are not the definitions. The slides define the pair as what (architecture) and how (organisation)."],
  "The CPU is responsible for:": [
    "Correct. The CPU contains the ALU, which does arithmetic and logic, and the control unit, which controls the whole computer. So the CPU does arithmetic, logic and control.",
    "Input is done by I/O devices and I/O modules. The CPU does much more than input.",
    "Long-term storage is the job of memory and disks. The CPU only has a few registers for temporary values.",
    "Compiling a program is done by a compiler, which is software. The CPU only executes machine instructions."],
  "Multicore processors contain:": [
    "Correct. Each core is a complete processing unit with its own control unit, ALU and registers (and perhaps its own cache), so a multicore chip has several of each.",
    "One single ALU describes a single-core processor. Multicore means multiple processing units.",
    "Hard drives are storage devices outside the processor. The number of cores has nothing to do with disks.",
    "I/O ports are for connecting devices. A multicore chip has more processing units, not more ports."],
  "The control unit:": [
    "Arithmetic is done by the ALU, not the control unit.",
    "Correct. The control unit fetches each instruction, decodes it and sends the control signals that make the other parts carry it out.",
    "Permanent storage is the job of secondary storage (disk, SSD). The control unit stores nothing permanently.",
    "Printers are connected through I/O modules. The control unit controls the CPU's operation, not the printer cable."],
  "The first-generation computers used:": [
    "Transistors were the second generation (from 1947, Bell Labs).",
    "Correct. First-generation computers such as ENIAC and IAS used vacuum tubes, which were big, hot and used a lot of power.",
    "Integrated circuits were the third generation (from about 1958/1964).",
    "Microprocessors (Intel 4004, 1971) came with large-scale integration, well after the first generation."],
  "ENIAC was mainly used for:": [
    "Weather forecasting was not ENIAC's purpose.",
    "Correct. ENIAC was built in World War II for the US Army to calculate artillery range (firing) tables.",
    "Payroll is business data processing. ENIAC was a scientific and military machine.",
    "Game simulation was not a use of ENIAC. Computers were far too rare and expensive for games then."],
  "The stored-program concept was introduced by:": [
    "The IBM 360 (1964) introduced the family concept, not the stored program.",
    "Correct. Von Neumann's IAS computer at Princeton (1946–1952) stored both the program and the data in the same memory. That is the stored-program concept.",
    "UNIVAC I was the first successful commercial computer (1950 census), not the origin of the stored-program idea.",
    "The PDP-8 (1964) was the first minicomputer."],
  "Transistors replaced vacuum tubes in which generation?": [
    "The first generation used vacuum tubes.",
    "Correct. Transistors replaced vacuum tubes in the second generation. They were smaller, cheaper and gave off less heat.",
    "The third generation used integrated circuits (many transistors on one chip).",
    "The fourth generation is usually linked with LSI/VLSI and microprocessors."],
  "Integrated circuits introduced:": [
    "Core memory (magnetic rings) came before and was replaced by semiconductor memory.",
    "Correct. An integrated circuit puts gates, memory cells and their connections on one silicon chip. This is microelectronics, \"small electronics\".",
    "Magnetic drums were an early storage technology, not something ICs introduced.",
    "Vacuum diodes are vacuum tube technology, the very first generation."],
  "Moore's Law states:": [
    "Moore's Law is about transistor count, not cost. In fact the cost of a chip stayed almost unchanged.",
    "Correct. Gordon Moore saw the number of transistors on a chip double every year; since the 1970s it has been about every 18 months.",
    "Speed did not halve. Shorter paths between denser components actually made chips faster.",
    "Moore's Law says nothing about power doubling. Denser chips need less power per transistor."],
  "IBM 360 series introduced:": [
    "Correct. The IBM System/360 (1964) was the first planned family of computers: the same (or similar) instruction set and operating system, with increasing speed, memory, I/O and cost.",
    "Cloud servers appeared decades later (2000s).",
    "Portable computers came much later with microprocessors.",
    "Quantum logic is modern research. It has nothing to do with the 1964 IBM 360."],
  "ARM processors are used mainly in:": [
    "Mainframes mostly use processors from IBM (and earlier x86 servers), not small ARM chips.",
    "Correct. ARM processors are RISC, low-power and small, so they are used in phones, tablets, IoT and other embedded systems.",
    "Servers have traditionally used x86 processors (ARM servers exist but are not the main use).",
    "Supercomputers traditionally use x86 and GPUs, not mainly ARM."],
  "Cloud service that provides software for end-users:": [
    "PaaS (Platform as a Service) gives developers a platform to build and run their own applications, not ready software for end users.",
    "IaaS (Infrastructure as a Service) rents raw resources: virtual machines, storage and networks.",
    "Correct. SaaS (Software as a Service) gives end users ready-made applications over the internet, such as Office 365, Google Apps and Dropbox.",
    "DaaS is not one of the three cloud service models in the slides."],
  "Performance in processors can be measured by:": [
    "MIPS (millions of instructions per second) is one measure, but it is not the only one.",
    "Clock frequency is also used, but it is only one measure.",
    "SPEC benchmarks are also used, but they are only one of the measures listed.",
    "Correct. All three are used to describe processor performance, so \"all of the above\" is the right choice (even though MIPS and clock speed alone can mislead)."],
  "Amdahl's Law is related to:": [
    "Power efficiency is not what Amdahl's Law is about.",
    "Correct. Amdahl's Law gives the speedup from running part of a program on N processors: Speedup = 1 / ((1 − f) + f/N). The serial part limits the gain.",
    "Data storage has nothing to do with Amdahl's Law.",
    "Instruction decoding is a step of the instruction cycle, not related to Amdahl's Law."],
  "Hexadecimal digits include:": [
    "0–9 only is decimal (base 10). Base 16 needs 16 different digits.",
    "Correct. Hexadecimal is base 16, so it needs digit values 0 to 15. They are written 0–9 and then A–F (A = 10 … F = 15).",
    "A–Z would be 26 letters. Hex only uses A to F.",
    "0–7 are the octal (base 8) digits."],
  "In positional number systems, value depends on:": [
    "Correct. In a positional system each digit is multiplied by the base raised to its position (rⁱ). So the same digit is worth more further left.",
    "Bit length only says how many digits there are. The value of each digit comes from the power of the base at its position.",
    "Register size is a hardware detail. It does not define how a positional number system works.",
    "The ALU type has nothing to do with how a number's value is defined."],
  "The binary equivalent of (25)<sub>10</sub> is:": [
    "Correct. 25 = 16 + 8 + 1 = 2⁴ + 2³ + 2⁰, so the bits are 1 1 0 0 1.",
    "10110 = 16 + 4 + 2 = 22, not 25.",
    "11110 = 16 + 8 + 4 + 2 = 30, not 25.",
    "11010 = 16 + 8 + 2 = 26, one more than 25."],
  "The decimal equivalent of (10101.11)<sub>2</sub> is:": [
    "20.5 would need integer part 10100 and fraction .1. The integer part 10101 is 21, not 20.",
    "Correct. 10101 = 16 + 4 + 1 = 21 and .11 = 0.5 + 0.25 = 0.75, so the value is 21.75.",
    "22.5 is wrong in both parts: 10101 is 21 and .11 is 0.75.",
    "23.25 is wrong: 23 would be 10111 and .25 would be .01."],
  "(A9)<sub>16</sub> equals in decimal:": [
    "159 = 9×16 + 15 = (9F)₁₆, not A9.",
    "Correct. A = 10, so (A9)₁₆ = 10 × 16 + 9 = 169.",
    "178 = 11×16 + 2 = (B2)₁₆.",
    "185 = 11×16 + 9 = (B9)₁₆. That uses B (11) instead of A (10)."],
  "Binary 10001001.11 equals hexadecimal:": [
    "Correct. Group in 4s from the binary point: integer 1000 1001 → 8 9, fraction .11 padded on the right to .1100 → C. Answer 89.C.",
    "90.A is wrong: 1000 is 8 (not 9) and 1001 is 9 (not 0). It looks like adding 1 to the answer.",
    "8A.D is wrong: 1001 is 9, not A, and .1100 is C, not D.",
    "8B.E is wrong in both the integer and the fraction digits."],
  "BCD represents:": [
    "Correct. BCD means Binary Coded Decimal: each decimal digit is written separately in 4 bits (59 → 0101 1001).",
    "\"Binary Control Data\" is not a real code name.",
    "\"Basic Code Display\" is not a real code name.",
    "\"Bit Counted Decimal\" is not a real code name."],
  "ASCII uses:": [
    "6 bits give only 64 characters, too few for ASCII.",
    "Correct. Standard ASCII is a 7-bit code, so it has 2⁷ = 128 characters.",
    "8 bits (256 characters) is EBCDIC, or extended ASCII. Standard ASCII is 7-bit.",
    "9-bit codes are not used for ASCII."],
  "EBCDIC code is used mainly on:": [
    "Correct. EBCDIC is IBM's 8-bit character code (256 characters), used on IBM mainframe and midrange systems.",
    "Personal PCs use ASCII and Unicode, not EBCDIC.",
    "Smartphones use Unicode (UTF-8).",
    "Routers process network packets and use ASCII for text. They are not where EBCDIC is used."],
  "ALU is responsible for:": [
    "Correct. The ALU (Arithmetic and Logic Unit) does the arithmetic (add, subtract…) and logic (AND, OR, NOT, compare) operations.",
    "Memory access is managed by the control unit and memory registers (MAR, MBR).",
    "Input operations are handled by I/O modules.",
    "Control sequencing is the job of the control unit."],
  "Unsigned magnitude can represent:": [
    "Correct. Unsigned numbers use every bit for magnitude, so they can only be zero or positive (n bits: 0 to 2ⁿ − 1).",
    "Unsigned cannot show negative numbers at all. There is no sign bit.",
    "Showing both signs needs a signed form such as sign-magnitude or 2's complement.",
    "Fractions need a binary point or a floating-point format. Plain unsigned integers have none."],
  "In signed-magnitude, MSB indicates:": [
    "Correct. In sign-magnitude the MSB is the sign: 0 means positive, 1 means negative. The other bits are the magnitude.",
    "The magnitude is held in the remaining bits, not in the MSB.",
    "A carry is produced during addition. It is not stored in the MSB of a number.",
    "Overflow is a condition after an operation, not something the MSB shows in a stored number."],
  "Range of 4-bit signed-magnitude:": [
    "Correct. With 4 bits, one is the sign and 3 are magnitude, so the largest magnitude is 111 = 7: −7 to +7. (There are two zeros.)",
    "−8 to +7 is the range of 4-bit 2's complement, not sign-magnitude.",
    "−15 to +15 would need 4 magnitude bits plus a sign bit (5 bits).",
    "0 to 15 is the range of 4-bit unsigned numbers."],
  "1's complement of 1010 is:": [
    "Correct. 1's complement flips every bit: 1→0 and 0→1, so 1010 becomes 0101.",
    "1011 only changes the last bit. 1's complement must flip all of them.",
    "1101 is not a bit-by-bit flip of 1010.",
    "1111 would be the result of OR-ing, not complementing."],
  "2's complement of 1010 is:": [
    "0101 is only the 1's complement. 2's complement adds 1 to it.",
    "Correct. 1's complement of 1010 is 0101; add 1 → 0110.",
    "0111 is 0101 + 2. You only add 1.",
    "1011 is just 1010 + 1. You must invert the bits first."],
  "2's complement avoids:": [
    "Correct. Sign-magnitude and 1's complement both have +0 and −0. 2's complement has only one zero (0000), which makes arithmetic simpler.",
    "2's complement does not avoid addition. Its whole point is that subtraction becomes addition.",
    "Overflow can still happen in 2's complement when the result is out of range.",
    "Decimal conversion is still needed to read the values. 2's complement does not avoid it."],
  "Overflow occurs when:": [
    "Correct. Overflow is when two numbers with the same sign give a result with the opposite sign: (+) + (+) = (−) or (−) + (−) = (+). The answer does not fit in the bits.",
    "In 2's complement the carry out of the MSB is often ignored, and that alone is not an overflow.",
    "An ALU reset is not related to overflow.",
    "\"Register full\" is not the definition. Overflow is about the result being outside the range."],
  "To subtract in 2's complement, we:": [
    "Correct. A − B = A + (2's complement of B). The ALU only needs an adder and a complementer.",
    "Using absolute values loses the sign. 2's complement subtraction works directly on the signed bit patterns.",
    "Division has nothing to do with subtraction.",
    "Shifting left multiplies by 2. It is not subtraction."],
  "Binary 11111101 in 8-bit 2's complement equals:": [
    "Correct. The MSB is 1, so it is negative. Invert 11111101 → 00000010, add 1 → 00000011 = 3, so the value is −3. Check: −128 + 125 = −3.",
    "−2 is 11111110 in 8-bit 2's complement.",
    "−1 is 11111111 in 8-bit 2's complement.",
    "+3 is 00000011. The pattern starts with 1, so it must be negative."],
  "Binary addition 0100 + 0011 gives:": [
    "Correct. 0100 is 4 and 0011 is 3, so the sum is 7 = 0111.",
    "1000 is 8. That would be 4 + 4, not 4 + 3.",
    "1011 is 11. It looks like the two numbers were put side by side, not added.",
    "0101 is 5. Adding is not the same as XOR or a partial sum."],
  "Convert (1100101)<sub>2</sub> to hexadecimal.": [
    "64 would be 0110 0100. The last group is 0101 = 5, not 4.",
    "Correct. Group from the right in 4s: 110 0101 → 0110 0101 → 6 5.",
    "66 would end in 0110. The last group is 0101.",
    "67 would end in 0111. The last group is 0101."],
  "Convert (1111010)<sub>2</sub> to octal.": [
    "171 ends in 001. The last group is 010 = 2.",
    "Correct. Group from the right in 3s: 1 111 010 → 001 111 010 → 1 7 2.",
    "173 ends in 011. The last group is 010.",
    "175 ends in 101. The last group is 010."],
  "Convert (254)<sub>10</sub> to hexadecimal.": [
    "FD = 253, one less than 254.",
    "Correct. 254 ÷ 16 = 15 remainder 14 → digits 15 (F) and 14 (E), so FE.",
    "FC = 252, two less than 254.",
    "FF = 255, one more than 254."],
  "Convert (3A)<sub>16</sub> to binary.": [
    "00111001 is 39 in hex (3 and 9). A is 1010, not 1001.",
    "Correct. Each hex digit becomes 4 bits: 3 = 0011 and A = 1010, giving 00111010.",
    "00111100 is 3C. A is 1010, not 1100.",
    "00111011 is 3B. A is 1010, not 1011."],
  "Convert (11110011)<sub>2</sub> to decimal.": [
    "241 = 11110001. Our pattern ends in 11, not 01.",
    "242 = 11110010. Our pattern ends in 11, not 10.",
    "Correct. 128 + 64 + 32 + 16 + 2 + 1 = 243.",
    "244 = 11110100. Our pattern ends in 0011, not 0100."],
  "In 8-bit two's complement, what is the result of 36 + 27?": [
    "01000001 = 65, two more than 63.",
    "Correct. 36 = 00100100 and 27 = 00011011; the sum is 00111111 = 63. Both are positive and 63 fits, so there is no overflow.",
    "01000011 = 67, not 63.",
    "01100001 = 97, not 63."],
  "Compute 90 + 70 in 8-bit two's complement.": [
    "10000000 is −128. The real bit sum of 90 and 70 is 10100000.",
    "Correct. 01011010 + 01000110 = 10100000. Two positives gave a negative pattern, so this is overflow: 160 does not fit in −128…127.",
    "11111110 is −2. It is not the bit sum of the two numbers.",
    "10010000 is not the sum. Add the bits again: 90 + 70 = 160 = 10100000."],
  "Find the result of 58 - 32 in 8-bit two's complement.": [
    "00011110 = 30. That is 58 − 28, not 58 − 32.",
    "Correct. 58 = 00111010 and −32 = 11100000; adding gives 1 00011010. Drop the carry: 00011010 = 26.",
    "00010100 = 20, not 26.",
    "00101000 = 40, not 26."],
  "Compute -85 - (-60) using 8-bit two's complement.": [
    "11111001 = −7. The correct result is −25.",
    "Correct. −85 − (−60) = −85 + 60 = −25. 25 = 00011001 → invert 11100110 → +1 → 11100111.",
    "00011101 = +29. The answer must be negative because 85 > 60.",
    "10100101 = −91. That is not −25."],
  "Find the 8-bit two's complement result of -22 + (-35).": [
    "11001011 = −53, not −57.",
    "Correct. −22 + (−35) = −57. 57 = 00111001 → invert 11000110 → +1 → 11000111.",
    "11011011 = −37, not −57.",
    "11101001 = −23, not −57."],
  "Calculate -120 + (-20) in 8-bit two's complement.": [
    "10011100 = −100. The true bit sum is 1 01110100, so the result bits are 01110100.",
    "11100100 is not the bit sum of −120 and −20.",
    "Correct. −120 = 10001000 and −20 = 11101100; adding gives 1 01110100. The kept 8 bits are 01110100. Two negatives gave a positive pattern, so there is overflow (−140 < −128).",
    "10101100 is not the bit sum of −120 and −20."],
  "Compute -103 - (-69) in 8-bit two's complement.": [
    "01010100 is +84. The answer must be negative.",
    "Correct. −103 − (−69) = −103 + 69 = −34. 34 = 00100010 → invert 11011101 → +1 → 11011110.",
    "10010100 = −108, not −34.",
    "10101111 = −81, not −34."],
  "Which of the following is an <b>architectural</b> attribute?": [
    "Correct. The instruction set is visible to the programmer, so it is an architectural attribute (like data-type bits, I/O mechanisms and addressing).",
    "Control signals are created inside the CPU and are invisible to the programmer. They are organisation.",
    "The memory technology (for example which kind of RAM) is a hardware choice hidden from programs. It is organisation.",
    "The interfaces between the computer and peripherals are hardware details. They are organisation."],
  "Whether multiplication is done by a dedicated hardware unit or by repeated addition is a question of:": [
    "Correct. Whether there is a multiply instruction is architecture, but HOW it is done (a special hardware unit or repeated addition) is organisation.",
    "Architecture only asks whether a multiply instruction exists, not how it is implemented.",
    "Instruction set design decides which instructions exist. The way multiplication is built in hardware is a separate, organisational question.",
    "Benchmarking measures performance. It does not decide how multiplication is implemented."],
  "Models in the same computer family share the same ______ but differ in ______.": [
    "Correct. Family members keep the same architecture so programs run on all of them, but each has a different organisation, so they differ in price and performance.",
    "This is reversed. If the architecture differed, programs would not be compatible across the family.",
    "Family models do not share the same price; they have the same instruction set, not different ones.",
    "Family models share the instruction set. Clock speed is one of the things that differs."],
  "The four basic functions of a computer are:": [
    "Correct. The slides list four basic functions: data processing, data storage, data movement and control.",
    "Printing is not a basic function. Input and output are both part of data movement.",
    "Fetch, decode, execute and store are steps of the instruction cycle, not the computer's basic functions.",
    "ALU, CU, registers and bus are components (structure), not functions."],
  "The four main structural components of a computer (top level) are:": [
    "Correct. At the top level the computer is CPU, main memory, I/O and the system interconnection (bus).",
    "ALU, control unit, registers and internal CPU interconnection are the parts inside the CPU, one level down.",
    "Keyboard, monitor, mouse and printer are peripheral devices, not the main structural components.",
    "Cache, RAM, ROM and disk are kinds of memory. They are not the four top-level components."],
  "Which of the following is <b>not</b> a structural component of the CPU?": [
    "Correct. Main memory is a separate top-level component, outside the CPU.",
    "The ALU is inside the CPU, so it is a CPU component.",
    "Registers are inside the CPU, so they are a CPU component.",
    "The control unit is inside the CPU, so it is a CPU component."],
  "In a multicore computer, each core consists of:": [
    "Correct. Each core is a full processing unit: its own control unit, ALU and registers, and perhaps its own cache.",
    "A core is more than an ALU. Without a control unit it could not fetch and run instructions.",
    "Hard drives and RAM are outside the processor chip. They are not part of a core.",
    "An I/O module connects devices. It is not what a core is made of."],
  "ENIAC was built by:": [
    "Correct. ENIAC was built by J. Presper Eckert and John Mauchly at the University of Pennsylvania.",
    "John von Neumann designed the IAS computer (the stored-program concept), not ENIAC.",
    "William Shockley was one of the inventors of the transistor at Bell Labs.",
    "Gordon Moore (Intel) is known for Moore's Law."],
  "ENIAC's first task after it was completed was:": [
    "Correct. ENIAC was finished in 1946, too late for the war, so its first task was calculations for the hydrogen bomb.",
    "The 1950 US census was done by UNIVAC I, not ENIAC.",
    "Payroll is business processing. ENIAC was built for military and scientific calculations.",
    "Weather forecasting was not ENIAC's first task."],
  "In the IAS computer, which register holds the <b>address of the next instruction</b>?": [
    "Correct. The Program Counter (PC) holds the address of the next instruction to fetch.",
    "The MAR holds the address of the memory word to be read or written, which is not always the next instruction.",
    "The MBR holds a data word (or instruction) being moved to or from memory, not an address.",
    "The IR holds the opcode of the instruction being executed now."],
  "Each 40-bit word of IAS memory can hold:": [
    "Correct. An IAS word is 40 bits, holding either a 40-bit number or two 20-bit instructions (8-bit opcode + 12-bit address each).",
    "An instruction is 20 bits, so an 80-bit instruction cannot fit in a 40-bit word.",
    "IAS instructions are 20 bits, not 10 bits.",
    "The whole point of the stored-program concept is that the same memory holds instructions too."],
  "The first successful commercial computer, commissioned by the US Bureau of Census, was:": [
    "Correct. UNIVAC I, built by the Eckert-Mauchly Computer Corporation, was the first successful commercial computer and was used for the 1950 census.",
    "The IBM 701 (1953) was IBM's first stored-program computer, for scientific work.",
    "The PDP-1 was a DEC machine from 1960. DEC's famous first minicomputer was the PDP-8.",
    "ENIAC was a military machine, not a commercial product."],
  "In an integrated circuit, data storage is provided by:": [
    "Correct. In an IC, memory cells store data (1 bit each).",
    "Gates do data processing (Boolean functions).",
    "Interconnections do data movement and carry control signals.",
    "Control signals tell the parts what to do. They do not store data."],
  "Which machine is known as the first <b>minicomputer</b>?": [
    "Correct. The DEC PDP-8 (1964) was the first minicomputer: small enough for a lab bench, no air-conditioned room, about $16,000.",
    "The IBM 360 was a family of large mainframe computers.",
    "UNIVAC II was a large commercial machine, not a minicomputer.",
    "The IBM 7000 series was a large transistor mainframe series."],
  "The first microprocessor (all CPU components on one chip) was:": [
    "Correct. The Intel 4004 (1971, 4-bit) was the first chip with all CPU components on it: the first microprocessor.",
    "The 8080 (1974) was the first general-purpose microprocessor, but not the first microprocessor.",
    "The 8086 (1978) was the 16-bit start of the x86 line.",
    "The 80386 (1985) was Intel's first 32-bit x86 processor."],
  "Which is <b>not</b> a consequence of Moore's Law?": [
    "Correct. This is NOT a consequence: the cost of a chip stayed almost unchanged while the number of transistors grew, so cost per transistor fell.",
    "This IS a consequence: denser chips have shorter paths, so they run faster.",
    "This IS a consequence: smaller components need less power and cooling.",
    "This IS a consequence: more on one chip means fewer connections between chips, so better reliability."],
  "A cloud service that gives customers tools and an environment to develop and deploy their own applications is:": [
    "Correct. PaaS (Platform as a Service) gives a platform with tools to build, test and run your own apps, such as Google App Engine or Windows Azure.",
    "SaaS gives finished applications to end users. You do not develop on it.",
    "IaaS gives raw infrastructure (virtual machines, storage, networks), not a development platform.",
    "DaaS is not one of the three models in the slides."],
  "A processor runs at 2 GHz. Its clock cycle time is:": [
    "Correct. τ = 1/f = 1/(2 × 10⁹) s = 0.5 × 10⁻⁹ s = 0.5 ns.",
    "2 ns would be the cycle time of a 0.5 GHz (500 MHz) clock. The numbers were flipped.",
    "0.2 ns would be a 5 GHz clock.",
    "5 ns would be a 200 MHz clock."],
  "A 400-MHz processor has an average CPI of 2.24. Its MIPS rate is about:": [
    "Correct. MIPS = f / (CPI × 10⁶) = 400 × 10⁶ / (2.24 × 10⁶) ≈ 178.6.",
    "400 is just the clock rate in MHz. It ignores the CPI.",
    "224 is the CPI × 100. It does not use the clock rate.",
    "896 is 400 × 2.24. You must divide by the CPI, not multiply."],
  "The industry-standard benchmark suite for processor-intensive applications is:": [
    "Correct. SPEC CPU2017 is the standard suite for processor-intensive work, with integer and floating-point programs.",
    "MIPS is a rate (millions of instructions per second), not a benchmark suite.",
    "MFLOPS is a rate for floating-point operations, not a benchmark suite.",
    "SPECjbb2015 is a SPEC benchmark for server-side Java, not the main processor-intensive suite."],
  "Using Amdahl's Law, if 80% of a program can run in parallel on 4 processors, the speedup is:": [
    "Correct. Speedup = 1 / ((1 − 0.8) + 0.8/4) = 1 / (0.2 + 0.2) = 1 / 0.4 = 2.5.",
    "4 would only happen if 100% of the program were parallel. The 20% serial part limits it.",
    "3.2 is 0.8 × 4, which is not Amdahl's formula.",
    "1.25 is 1 / 0.8. It forgets the 4 processors."],
  "Why is MIPS alone not a valid way to compare processors with different architectures?": [
    "Correct. Different instruction sets do different amounts of work per instruction, so a higher MIPS rate does not always mean a faster machine. Benchmarks such as SPEC are used instead.",
    "MIPS can be calculated for any processor, RISC or CISC.",
    "MIPS measures instructions per second, not memory speed.",
    "MIPS depends on clock rate and CPI, not only on the number of cores."],
  "Which of the following is a valid <b>octal</b> number?": [
    "Correct. Octal digits are 0 to 7, and 7, 6, 4 and 5 are all in that range.",
    "1289 contains 8 and 9, which are not octal digits.",
    "8A contains 8 and A. Neither is an octal digit.",
    "199 contains 9, which is not an octal digit."],
  "(110110)<sub>2</sub> in decimal is:": [
    "Correct. 110110 = 32 + 16 + 4 + 2 = 54.",
    "52 = 110100. Our number has 1s at 2 and 4.",
    "56 = 111000. That is not our pattern.",
    "108 = 1101100, which is our number shifted one place left (× 2)."],
  "(1011.101)<sub>2</sub> in decimal is:": [
    "Correct. 1011 = 8 + 2 + 1 = 11 and .101 = 0.5 + 0.125 = 0.625, so 11.625.",
    "11.5 forgets the last fraction bit (0.125).",
    "13.625 has the wrong integer part: 1011 is 11, not 13 (1101).",
    "11.375 is .011, not .101. The fraction bits were read in the wrong order."],
  "(75)<sub>10</sub> in binary is:": [
    "Correct. 75 = 64 + 8 + 2 + 1 = 1001011.",
    "1010011 = 64 + 16 + 2 + 1 = 83.",
    "1001101 = 64 + 8 + 4 + 1 = 77.",
    "1100101 = 64 + 32 + 4 + 1 = 101."],
  "(0.375)<sub>10</sub> in binary is:": [
    "Correct. Multiply by 2: 0.375 → 0.75 (0), 0.75 → 1.5 (1), 0.5 → 1.0 (1). Read top to bottom: 0.011.",
    "0.101 = 0.625. The digits were read in the wrong order.",
    "0.0011 = 0.1875. There is an extra 0.",
    "0.111 = 0.875."],
  "(2F)<sub>16</sub> in decimal is:": [
    "Correct. (2F)₁₆ = 2 × 16 + 15 = 47.",
    "45 = 2D in hex. F is 15, not 13.",
    "32 is just 2 × 16. It forgets the F.",
    "215 treats F as if it were 15 written after 2 (\"2\" and \"15\"). Each hex digit has a place value."],
  "(300)<sub>10</sub> in hexadecimal is:": [
    "Correct. 300 ÷ 16 = 18 r 12 (C); 18 ÷ 16 = 1 r 2; 1 ÷ 16 = 0 r 1. Read the remainders from the bottom up: 12C.",
    "1C2 reads the remainders top to bottom. They must be read bottom to top.",
    "12A = 298. The last remainder is 12 (C), not 10.",
    "13C = 316, not 300."],
  "(1101011110)<sub>2</sub> in hexadecimal is:": [
    "Correct. Group from the right in 4s and pad on the left: 0011 0101 1110 → 3 5 E.",
    "D78 comes from grouping from the left. Integer bits must be grouped from the binary point (the right).",
    "35F ends in F (1111), but the last group is 1110 = E.",
    "1AE is not the result of grouping this number correctly."],
  "(10110111)<sub>2</sub> in octal is:": [
    "Correct. Group from the right in 3s: 10 110 111 → 010 110 111 → 2 6 7.",
    "557 comes from grouping from the left. Group from the right.",
    "B7 is the hexadecimal value (groups of 4), not octal.",
    "273 has the last two groups wrong."],
  "(B6)<sub>16</sub> in octal is:": [
    "Correct. B6 = 1011 0110 in binary; regroup in 3s from the right: 010 110 110 → 2 6 6.",
    "182 is the decimal value of B6, not the octal value.",
    "336 is not B6 regrouped into 3s.",
    "556 comes from grouping from the left."],
  "(A3.4)<sub>16</sub> in binary is:": [
    "Correct. A = 1010, 3 = 0011, 4 = 0100, so 10100011.0100, which is 10100011.01.",
    "10100011.1 would be fraction .8 in hex. The 4 is 0100, so the fraction is .01.",
    "1010011.01 drops a 0 from the integer part: A3 needs 8 bits, 10100011.",
    "10010011.01 is 93.4. The first digit A is 1010, not 1001."],
  "(157)<sub>8</sub> in decimal is:": [
    "Correct. (157)₈ = 1 × 64 + 5 × 8 + 7 = 64 + 40 + 7 = 111.",
    "157 just copies the digits. Base 8 place values are 64, 8 and 1, not 100, 10 and 1.",
    "109 = 155 in octal.",
    "117 = 165 in octal."],
  "The BCD code for decimal 59 is:": [
    "Correct. BCD codes each decimal digit in 4 bits: 5 = 0101 and 9 = 1001.",
    "0011 1011 is 59 in pure binary (32 + 16 + 8 + 2 + 1), not BCD.",
    "0101 1000 is BCD for 58.",
    "1001 0101 is BCD for 95. The digits are swapped."],
  "How many characters can 7-bit ASCII represent?": [
    "Correct. 7 bits give 2⁷ = 128 different codes (0 to 127).",
    "256 is 2⁸, the size of 8-bit codes such as EBCDIC.",
    "64 is 2⁶, a 6-bit code.",
    "127 is the largest code number, but counting 0 there are 128 characters."],
  "Which unit is described as \"everything else in the computer is there to service this unit\"?": [
    "Correct. The slides say everything else in the computer is there to service the ALU: it does the calculations, and the other units bring it data and take the results away.",
    "The control unit controls the ALU, but the quote is about the ALU.",
    "Main memory stores data for the ALU, but it is one of the units that serve it.",
    "An I/O module connects devices. It is not the unit everything else serves."],
  "−45 in 8-bit <b>signed-magnitude</b> is:": [
    "Correct. 45 = 0101101 in 7 bits; set the sign bit to 1 for negative: 1 0101101.",
    "11010011 is −45 in 2's complement, not sign-magnitude.",
    "11010010 is −45 in 1's complement.",
    "00101101 is +45 (sign bit 0)."],
  "−45 in 8-bit <b>2's complement</b> is:": [
    "Correct. +45 = 00101101 → invert to 11010010 → add 1 → 11010011.",
    "10101101 is −45 in sign-magnitude.",
    "11010010 is −45 in 1's complement. You must still add 1.",
    "00101101 is +45."],
  "10010110 in 8-bit 2's complement equals:": [
    "Correct. The MSB is worth −128: −128 + 16 + 4 + 2 = −106.",
    "−22 treats the MSB as a sign only (sign-magnitude: 0010110 = 22).",
    "150 is the unsigned value. In 2's complement an MSB of 1 means negative.",
    "−105 is the 1's complement reading (−127 + 22)."],
  "The range of 8-bit 2's complement is:": [
    "Correct. n-bit 2's complement goes from −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1, so −128 to +127.",
    "−127 to +127 is the range of sign-magnitude and 1's complement (they have two zeros).",
    "0 to 255 is 8-bit unsigned.",
    "+128 does not fit: 10000000 is −128."],
  "Which representations have <b>two</b> representations of zero?": [
    "Correct. Sign-magnitude has 0000 and 1000; 1's complement has 0000 and 1111. Both have +0 and −0.",
    "2's complement has only one zero, which is its main advantage.",
    "Unsigned has only one zero (all bits 0).",
    "Not all of them: 2's complement and unsigned have a single zero."],
  "The 2's complement of 0110100 is:": [
    "Correct. From the right, keep the bits up to and including the first 1 (\"100\"), then flip the rest: 0110 → 1001. Result 1001100.",
    "1001011 is only the 1's complement. You must add 1.",
    "0110100 is the original number, unchanged.",
    "1001101 adds 1 to the wrong place."],
  "In 8-bit 2's complement, 45 + 38 =": [
    "Correct. 45 = 00101101 and 38 = 00100110; the sum is 01010011 = 83 (it fits, no overflow).",
    "01010101 = 85, not 83.",
    "01100011 = 99, not 83.",
    "00110101 = 53, not 83."],
  "In 8-bit 2's complement, 25 − 40 =": [
    "Correct. 25 + (−40) = 00011001 + 11011000 = 11110001, which is −15.",
    "10001111 is −15 in sign-magnitude, not 2's complement.",
    "11110000 is −16, off by one.",
    "00001111 is +15. The answer must be negative."],
  "In 8-bit 2's complement, −64 + (−80) gives:": [
    "Correct. 11000000 + 10110000 = 1 01110000; the 8 bits kept are 01110000. Two negatives gave a positive, so it is overflow (−144 is below −128).",
    "10010000 is not the bit sum, and the true result −144 does not fit, so there must be overflow.",
    "11110000 is not the bit sum, and there is overflow.",
    "The bits 01110000 are right, but two negatives giving a positive IS overflow."],
  "Which operation causes overflow in <b>4-bit</b> 2's complement?": [
    "Correct. 5 − (−3) = 5 + 3 = 8, but 4-bit 2's complement only goes up to +7. 0101 + 0011 = 1000, a negative pattern: overflow.",
    "5 − 2 = 3 fits in −8…+7.",
    "−4 + 3 = −1 fits.",
    "7 − 7 = 0 fits."],
  "In Booth's algorithm, when Q<sub>0</sub>Q<sub>−1</sub> = <b>10</b>, the step is:": [
    "Correct. Q₀Q₋₁ = 10 means the start of a run of 1s: subtract (A ← A − M), then arithmetic shift right A, Q, Q₋₁.",
    "A ← A + M is for Q₀Q₋₁ = 01 (end of a run of 1s).",
    "Shift only is for 00 or 11.",
    "Booth's algorithm always shifts right (arithmetic), never left."],
  "Using the add-shift method with 4-bit registers, 9 × 6 gives the product A Q =": [
    "Correct. 9 × 6 = 54 = 0011 0110 in 8 bits (A holds 0011, Q holds 0110).",
    "01010100 = 84, not 54.",
    "00110101 = 53, off by one.",
    "01101100 = 108 = 54 × 2. It is shifted one place too far."],
  "Restoring division of 13 by 4 (4-bit registers) ends with:": [
    "Correct. 13 ÷ 4 = 3 remainder 1. The quotient ends in Q (0011) and the remainder in A (0001).",
    "This swaps them: the quotient is in Q and the remainder is in A.",
    "The remainder of 13 ÷ 4 is 1, not 0.",
    "The quotient is 3, not 4 (4 × 4 = 16 > 13)."],
  "Whether a computer has a cache, and how large it is, is an example of:": [
    "Correct. A cache is invisible to the programmer (programs run the same with or without it), so whether it exists and its size are organisation.",
    "Architecture is what the programmer sees. The cache is transparent, so it is not architecture.",
    "The instruction set does not change when a cache is added.",
    "Addressing modes are part of the architecture. They do not decide cache size."],
  "The Instruction Set Architecture (ISA) is the boundary between:": [
    "Correct. The ISA is the boundary between hardware and software: the part of the hardware that software (the programmer or compiler) works with.",
    "The CPU and memory are connected by the bus, not by the ISA.",
    "Memory and I/O are connected by the system interconnection.",
    "The ALU and control unit are both inside the CPU. The ISA is not a boundary between them."],
  "Describing a computer by starting with the whole system and breaking it into its subparts is the:": [
    "Correct. Starting with the whole system and breaking it into parts is top-down. The slides say this is the clearest way.",
    "Bottom-up starts with the smallest parts and builds upwards, the opposite.",
    "The family concept is IBM 360's idea of compatible models.",
    "The stored-program concept is about keeping programs in memory."],
  "A computer that receives data from one device and sends it to another (e.g. a communications device) is mainly performing:": [
    "Correct. Taking data in from one device and sending it out to another is data movement.",
    "Data storage means keeping data, not passing it along.",
    "Data processing means changing the data (calculations).",
    "Control means co-ordinating the other functions."],
  "The mechanism that provides communication among the CPU, main memory and I/O is the:": [
    "Correct. The system interconnection (usually the system bus) connects the CPU, main memory and I/O.",
    "The control unit controls the CPU's operation. It is not the link between the top-level components.",
    "The internal CPU interconnection connects the parts inside the CPU, not the CPU to memory and I/O.",
    "The register file is storage inside the CPU."],
  "Fast, temporary storage <b>inside</b> the CPU is provided by:": [
    "Correct. Registers are small, very fast storage inside the CPU for values being worked on.",
    "Main memory is outside the CPU and much slower than registers.",
    "The ALU calculates; it does not store values.",
    "The system bus moves data; it does not store it."],
  "An individual processing unit on a processor chip is called a:": [
    "Correct. Each processing unit on the chip is a core; a processor can have one or more cores.",
    "\"Processor\" is the whole chip, which may contain several cores.",
    "A socket is the place on the motherboard where the processor is fitted.",
    "A bus is a connection, not a processing unit."],
  "Which statement about first-generation (vacuum tube) computers is <b>false</b>?": [
    "Correct (this is the false statement). First-generation computers could NOT multitask; they ran one job at a time.",
    "This is true: vacuum tubes produced a lot of heat.",
    "This is true: they used a lot of power and were costly to operate.",
    "This is true: they were programmed in machine language."],
  "ENIAC contained approximately:": [
    "Correct. ENIAC had about 18,000 vacuum tubes and filled about 15,000 square feet.",
    "2,300 transistors is the Intel 4004, not ENIAC (which had no transistors).",
    "1 million transistors is a much later microprocessor.",
    "1,000 vacuum tubes is far too few."],
  "The stored-program concept means:": [
    "Correct. Instructions and data are kept in the same memory, so a new program is loaded instead of rewiring the machine.",
    "Rewiring plug boards was how ENIAC was programmed, the problem the stored-program concept solved.",
    "Punched cards are a way to enter programs, not the stored-program concept.",
    "The ALU does not store programs or data."],
  "In the IAS computer, which register holds temporary operands and results of ALU operations?": [
    "Correct. The accumulator (AC), together with the MQ, holds operands and results of ALU operations.",
    "The PC holds the address of the next instruction.",
    "The MAR holds a memory address.",
    "The IBR temporarily holds the right-hand instruction of a word."],
  "UNIVAC II was <b>upward compatible</b>. This means:": [
    "Correct. Upward compatible means programs written for the older machine (UNIVAC I) also run on the newer one.",
    "UNIVAC II did not use integrated circuits; ICs came in the third generation.",
    "IAS was the first stored-program computer.",
    "Cores did not exist then."],
  "IBM's first stored-program computer (1953) was the:": [
    "Correct. The IBM 701 (1953) was IBM's first stored-program computer, meant for scientific work.",
    "The IBM 702 (1955) was for business applications and came later.",
    "The IBM 360 (1964) was the family of computers.",
    "The IBM 7000 series was second-generation (transistor) machines."],
  "Which was <b>not</b> an advantage of transistors over vacuum tubes?": [
    "Correct (this was NOT an advantage of second-generation transistors). They were separate components; putting thousands on one chip came with integrated circuits in the third generation.",
    "This WAS an advantage: transistors are smaller than vacuum tubes.",
    "This WAS an advantage: transistors are cheaper.",
    "This WAS an advantage: transistors produce less heat."],
  "Compared with magnetic core memory, early semiconductor memory was:": [
    "Correct. Semiconductor memory was faster and could be read without destroying the data (core memory readout was destructive).",
    "This describes core memory, not semiconductor memory.",
    "Semiconductor memory was smaller, not bulkier.",
    "Ferromagnetic rings are core memory."],
  "Intel's first <b>general-purpose</b> microprocessor was the:": [
    "Correct. The 8080 (1974) was Intel's first general-purpose microprocessor.",
    "The 4004 was the first microprocessor, but it was built for a specific application (a calculator).",
    "The 8008 was also designed for a specific application.",
    "The 8086 (1978) came later and started the 16-bit x86 line."],
  "The x86 instruction set has evolved while staying:": [
    "Correct. x86 keeps backward compatibility: programs written for older x86 processors still run on newer ones.",
    "It has changed a lot: about one instruction a month was added, around 500 in total.",
    "x86 is CISC. ARM is the well-known RISC design.",
    "x86 grew from 16 bits to 32 and 64 bits."],
  "Renting virtual servers, storage and networks from Amazon Web Services is an example of:": [
    "Correct. Renting virtual servers, storage and networks is Infrastructure as a Service (IaaS).",
    "SaaS gives finished applications, not raw servers.",
    "PaaS gives a development platform, not raw servers.",
    "An embedded system is a computer built into a device, not a cloud service."],
  "A program mix is 60% CPI 1, 18% CPI 2, 12% CPI 4, 10% CPI 8. The average CPI is:": [
    "Correct. CPI = 0.6×1 + 0.18×2 + 0.12×4 + 0.1×8 = 0.6 + 0.36 + 0.48 + 0.8 = 2.24.",
    "3.75 is the plain average of 1, 2, 4 and 8. You must weight each CPI by its percentage.",
    "15 is the sum 1 + 2 + 4 + 8.",
    "1.75 is not the weighted sum."],
  "A program of 2 million instructions has CPI 2 on a 500-MHz processor. Its execution time is:": [
    "Correct. T = Ic × CPI / f = (2 × 10⁶ × 2) / (500 × 10⁶) = 0.008 s = 8 ms.",
    "4 ms forgets to multiply by the CPI of 2.",
    "1 ms is not the result of the formula.",
    "16 ms doubles the right answer."],
  "By Amdahl's Law, if 90% of a program is parallelisable, the <b>maximum</b> speedup with unlimited processors is:": [
    "Correct. With unlimited processors f/N → 0, so the speedup → 1 / (1 − f) = 1 / 0.1 = 10.",
    "9 is not 1 / (1 − 0.9).",
    "90 is the percentage, not the speedup.",
    "The serial 10% never speeds up, so the speedup is limited to 10."],
  "Which is <b>not</b> a characteristic of a good benchmark program?": [
    "Correct (this is NOT a good characteristic). Benchmarks must be portable, so they are written in a high-level language, not one machine's language.",
    "This IS a good characteristic: high-level languages make benchmarks portable.",
    "This IS a good characteristic: it represents a kind of real work.",
    "This IS a good characteristic: easy to measure and widely distributed."],
  "In (4728)<sub>10</sub>, the value of the digit 7 is:": [
    "Correct. 7 is in the hundreds place: 7 × 10² = 700.",
    "70 would be the tens place, where the 2 is.",
    "7 would be the units place, where the 8 is.",
    "7000 would be the thousands place, where the 4 is."],
  "Which is the <b>largest</b>: (10.11)<sub>2</sub>, (2.7)<sub>10</sub>, (2.B)<sub>16</sub>?": [
    "Correct. (10.11)₂ = 2 + 0.5 + 0.25 = 2.75, which is bigger than 2.7 and 2.6875.",
    "(2.7)₁₀ = 2.7 is less than 2.75.",
    "(2.B)₁₆ = 2 + 11/16 = 2.6875, the smallest.",
    "They are not equal: 2.75, 2.7 and 2.6875."],
  "(101101.011)<sub>2</sub> in decimal is:": [
    "Correct. 101101 = 32 + 8 + 4 + 1 = 45 and .011 = 0.25 + 0.125 = 0.375, so 45.375.",
    "45.75 is .11, not .011.",
    "45.3 reads the fraction as if it were decimal.",
    "44.375 has the wrong integer part: 101101 is 45."],
  "(14.625)<sub>10</sub> in binary is:": [
    "Correct. 14 = 8 + 4 + 2 = 1110. Fraction: 0.625 × 2 = 1.25 (1), 0.25 × 2 = 0.5 (0), 0.5 × 2 = 1.0 (1) → .101. So 1110.101.",
    "1110.011 = 14.375. The fraction bits were read in the wrong order.",
    "1101.101 = 13.625. The integer part is wrong: 14 is 1110.",
    "1110.110 = 14.75. The fraction .110 is 0.75, not 0.625."],
  "(3D.8)<sub>16</sub> in decimal is:": [
    "Correct. 3 × 16 + 13 (D) = 61, and .8 = 8/16 = 0.5, so 61.5.",
    "61.8 treats the hex fraction digit as decimal. .8 in hex means 8/16 = 0.5.",
    "53.5 uses D = 5. D is 13.",
    "61.05 is not 8/16."],
  "(725)<sub>8</sub> in binary is:": [
    "Correct. Each octal digit becomes 3 bits: 7 = 111, 2 = 010, 5 = 101 → 111010101.",
    "111010110 ends in 110 (6). The last digit 5 is 101.",
    "111100101 has the middle digit wrong: 2 is 010, not 100.",
    "11101101 has only 8 bits. Each of the 3 octal digits needs exactly 3 bits (9 bits)."],
  "(1F3)<sub>16</sub> in octal is:": [
    "Correct. 1F3 = 0001 1111 0011 in binary. Regroup in 3s from the right: 111 110 011 → 7 6 3.",
    "1763 keeps an extra leading 1 from grouping badly. The leading zeros 000 give nothing.",
    "499 is the decimal value of 1F3, not octal.",
    "673 has the first two digits swapped."],
  "(312)<sub>4</sub> in decimal is:": [
    "Correct. Base 4 place values are 16, 4 and 1: 3 × 16 + 1 × 4 + 2 = 54.",
    "312 just copies the digits as if it were base 10.",
    "78 does not come from base-4 place values (16, 4, 1). Check: 3×16 + 1×4 + 2 is 54.",
    "48 counts only the first digit (3 × 16)."],
  "(54)<sub>10</sub> in base 5 is:": [
    "Correct. 54 ÷ 5 = 10 r 4; 10 ÷ 5 = 2 r 0; 2 ÷ 5 = 0 r 2. Read bottom up: 204. Check: 2×25 + 0×5 + 4 = 54.",
    "104 = 1×25 + 4 = 29.",
    "240 reads the remainders the wrong way round.",
    "214 = 2×25 + 5 + 4 = 59."],
  "(63)<sub>8</sub> in base 5 is:": [
    "Correct. First (63)₈ = 6×8 + 3 = 51. Then 51 ÷ 5 = 10 r 1; 10 ÷ 5 = 2 r 0; 2 ÷ 5 = 0 r 2 → 201.",
    "123 is not the base-5 form of 51 (123₅ = 38).",
    "51 is the decimal value, not base 5.",
    "102 reads the remainders the wrong way round."],
  "The minimum number of bits needed to store the unsigned number 200 is:": [
    "Correct. 7 bits can hold up to 2⁷ − 1 = 127, which is too small. 8 bits hold up to 255, so 200 needs 8 bits.",
    "7 bits only reach 127, less than 200.",
    "9 bits would work but is not the minimum.",
    "The number of bits is not the value itself."],
  "Why is hexadecimal used to write binary data?": [
    "Correct. One hex digit is exactly 4 bits, so binary is written in a quarter of the digits and converts back and forth very easily.",
    "Computers store everything in binary (base 2), not base 16.",
    "How we write numbers does not change the number of transistors.",
    "Hex is only a short way to write binary. The computer still uses binary."],
  "The BCD value 0111 0010 1001 represents:": [
    "Correct. Read each group of 4 bits as one decimal digit: 0111 = 7, 0010 = 2, 1001 = 9 → 729.",
    "1833 is the value if all 12 bits are read as one pure binary number.",
    "BCD has no decimal point here. It is the whole number 729.",
    "279 reads the digits in the wrong order."],
  "Which statement is <b>true</b>?": [
    "Correct. ASCII is a 7-bit code with 128 characters; EBCDIC is IBM's 8-bit code with 256 characters, used on mainframes.",
    "This swaps the bit widths.",
    "Smartphones use Unicode, not EBCDIC.",
    "The codes are different; for example \"A\" is 65 in ASCII and 193 in EBCDIC."],
  "11001010 interpreted as an 8-bit <b>unsigned</b> number is:": [
    "Correct. Unsigned: 128 + 64 + 8 + 2 = 202.",
    "−74 is the signed-magnitude reading.",
    "−54 is the 2's complement reading.",
    "−53 is the 1's complement reading."],
  "11001010 interpreted as 8-bit <b>signed-magnitude</b> is:": [
    "Correct. The sign bit 1 means negative and the magnitude 1001010 = 64 + 8 + 2 = 74, so −74.",
    "202 is the unsigned reading. In signed-magnitude the MSB is the sign.",
    "−54 is the 2's complement reading.",
    "−53 is the 1's complement reading."],
  "11001010 interpreted as 8-bit <b>2's complement</b> is:": [
    "Correct. In 2's complement the MSB is worth −128: −128 + 64 + 8 + 2 = −54.",
    "−74 is the signed-magnitude reading.",
    "202 is the unsigned reading.",
    "−53 is the 1's complement reading (one off)."],
  "−19 in 8-bit <b>1's complement</b> is:": [
    "Correct. +19 = 00010011; flip every bit for 1's complement → 11101100.",
    "11101101 is the 2's complement (1's complement + 1).",
    "10010011 is −19 in sign-magnitude.",
    "00010011 is +19."],
  "The range of 6-bit 2's complement is:": [
    "Correct. 6-bit 2's complement: −2⁵ to 2⁵ − 1 = −32 to +31.",
    "−31 to +31 is the 6-bit sign-magnitude / 1's complement range.",
    "−64 to +63 is 7-bit 2's complement.",
    "0 to 63 is 6-bit unsigned."],
  "−128 in 8-bit 2's complement is:": [
    "Correct. 10000000 is −128, the most negative 8-bit 2's complement value.",
    "11111111 is −1.",
    "10000001 is −127.",
    "−128 can be represented. It is +128 that cannot."],
  "In 5-bit 2's complement, −15 + 9 =": [
    "Correct. −15 = 10001 and +9 = 01001; the sum is 11010 = −6.",
    "10110 = −10, not −6.",
    "00110 = +6. The answer must be negative.",
    "11001 = −7, off by one."],
  "In 8-bit 2's complement, −39 + 92 =": [
    "Correct. −39 = 11011001 and 92 = 01011100; the sum is 1 00110101. Drop the carry: 00110101 = 53. Different signs, so no overflow.",
    "11001011 is not the sum (it is −53).",
    "00110100 = 52, off by one.",
    "10110101 is negative; the answer 53 is positive."],
  "In 8-bit 2's complement, 104 + 45 gives:": [
    "Correct. 01101000 + 00101101 = 10010101. Two positives gave a negative pattern, so overflow (149 > 127).",
    "The bits are right, but two positives giving a negative is overflow.",
    "01101011 is not the bit sum.",
    "00010101 is not the bit sum."],
  "In 8-bit 2's complement, −50 − 25 =": [
    "Correct. −50 = 11001110 and −25 = 11100111; adding gives 1 10110101. Drop the carry: 10110101 = −75 (fits, no overflow).",
    "11001011 = −53, not −75.",
    "10110100 = −76, off by one.",
    "01001011 = +75. The answer must be negative."],
  "In 8-bit 2's complement, 12 − (−5) =": [
    "Correct. 12 − (−5) = 12 + 5 = 17 = 00010001.",
    "00000111 = 7 is 12 − 5. Subtracting a negative means adding.",
    "11101111 = −17. The answer is positive.",
    "00010010 = 18, off by one."],
  "In 8-bit 2's complement, −1 + 1 produces a carry out of the MSB. The result is:": [
    "Correct. 11111111 + 00000001 = 1 00000000; keep 00000000 = 0. The operands have different signs, so overflow is impossible; the carry is simply discarded.",
    "A carry out of the MSB is not overflow in 2's complement. Overflow needs same-sign operands with an opposite-sign result.",
    "10000000 is not the sum, and there is no overflow.",
    "11111111 is −1, not 0."],
  "In Booth's algorithm, when Q<sub>0</sub>Q<sub>−1</sub> = <b>01</b>, the step is:": [
    "Correct. Q₀Q₋₁ = 01 is the end of a run of 1s: add (A ← A + M), then arithmetic shift right.",
    "Subtracting is for 10.",
    "Shift only is for 00 or 11.",
    "Booth's algorithm never sets Q₀ directly. That is what division does."],
  "In IEEE 754 single precision, the stored (biased) exponent for 1.101001 × 2<sup>20</sup> is:": [
    "Correct. Biased exponent = 20 + 127 = 147 = 10010011.",
    "00010100 is 20 without the bias.",
    "10010100 = 148, one too many.",
    "01101011 = 107 = 127 − 20, the exponent for 2⁻²⁰."],
  "Computer organisation deals with:": [
    "Correct. Organisation is the operational units and how they connect to make the architecture work. It answers how it is built.",
    "The instruction set seen by the programmer is architecture.",
    "The programming language is software, not organisation.",
    "Price is a result of organisation choices, not what organisation means."],
  "Which of the following is an <b>organisational</b> attribute?": [
    "Correct. Control signals and memory technology are hidden from the programmer, so they are organisation.",
    "The instruction set is architectural.",
    "The number of bits for data types is architectural (the programmer sees it).",
    "Addressing techniques are architectural."],
  "\"Is there a hardware multiply unit, or is multiplication done by repeated addition?\" This is a question of:": [
    "Correct. Having a multiply instruction is architecture; building it with a hardware unit or with repeated addition is organisation.",
    "Architecture only says a multiply instruction exists.",
    "Cloud computing is about services over the internet.",
    "Benchmarking measures speed. It does not decide how multiply is built."],
  "Computer architecture is the realisation of what a computer system does, while organisation is about:": [
    "Correct. Architecture is what the computer does; organisation is how it does it.",
    "\"Why\" is not part of the definitions.",
    "Who uses the computer is not organisation.",
    "When it was built is history, not organisation."],
  "Manufacturers produce a family of computer models that have:": [
    "Correct. Same architecture (programs run on all of them), different organisation (different price and speed).",
    "This is reversed. Different architectures would break compatibility.",
    "Family models have different prices and performance.",
    "Compatibility is the whole point of a family."],
  "The main benefit of the processor family concept is:": [
    "Correct. The same basic instruction set means programs work on every model, old and new.",
    "Models in a family run at different speeds.",
    "Every model still needs an operating system.",
    "Power use differs between models."],
  "In a processor family, which of these can change without breaking program compatibility?": [
    "Correct. Cores and cache are organisation, so they can change without breaking programs.",
    "Changing the basic instruction set would break old programs.",
    "Programmer-visible features are architecture; changing them breaks compatibility.",
    "If existing instructions changed meaning, old programs would run wrongly."],
  "Describing a computer by starting at the bottom and building up to a complete description is the:": [
    "Correct. Starting at the bottom and building up is bottom-up.",
    "Top-down starts with the whole system and breaks it into parts.",
    "The stored-program concept is about keeping the program in memory.",
    "The family concept is about compatible models."],
  "According to the slides, it is clearer to describe a computer system using:": [
    "Correct. The slides say top-down (start with the major components) is the clearest way.",
    "Bottom-up is possible, but the slides prefer top-down.",
    "A list of chips does not describe structure and function.",
    "Machine language is a way to program, not to describe a computer system."],
  "All computer functions are:": [
    "Correct. The four basic functions are data processing, data storage, data movement and control.",
    "Printing and saving are examples, not the basic functions.",
    "Fetch, decode, execute, store is the instruction cycle.",
    "Compile, link, load and run are steps for building programs."],
  "Moving data between the computer and a device connected to it (e.g. keyboard, screen) is the function of:": [
    "Correct. Moving data to and from devices such as the keyboard or screen is data movement.",
    "Data storage keeps data; it does not move it to devices.",
    "Control co-ordinates the other functions.",
    "Data processing changes data."],
  "The unit that controls and synchronises the processing, storage and movement functions provides the function of:": [
    "Correct. Control co-ordinates processing, storage and movement.",
    "Data storage keeps data.",
    "Data movement carries data.",
    "Benchmarking is not a computer function."],
  "Which top-level component moves data between the computer and its external environment?": [
    "Correct. I/O moves data between the computer and its external environment.",
    "Main memory stores data.",
    "The system interconnection connects the internal parts, not the outside world.",
    "The control unit controls the CPU."],
  "Which top-level component stores data?": [
    "Correct. Main memory stores data and programs.",
    "I/O moves data to and from devices.",
    "The system interconnection carries data between components.",
    "The ALU processes data."],
  "The CPU (processor):": [
    "Correct. The CPU controls the computer's operation and does its data processing.",
    "Permanent storage is the job of disks, not the CPU.",
    "Connecting peripherals is the job of I/O modules.",
    "The CPU does far more than send data to a printer."],
  "Which is NOT a structural component of the control unit?": [
    "Correct (NOT part of the control unit). Main memory is a separate top-level component.",
    "Sequencing logic IS part of the control unit.",
    "Control unit registers and decoders ARE part of the control unit.",
    "Control memory IS part of the control unit."],
  "At the top level, which list gives the four main structural components of a computer?": [
    "Correct. Top level: CPU, main memory, I/O and the system interconnection.",
    "ALU, registers, CU and internal bus are inside the CPU (the next level down).",
    "Keyboard, mouse, monitor and printer are peripherals.",
    "Gates, memory cells, wafers and chips are about how ICs are made."],
  "Going \"down\" one level from the computer, the CPU is made of:": [
    "Correct. Inside the CPU: ALU, registers, control unit and the internal CPU interconnection.",
    "Main memory, I/O and system bus are top-level components outside the CPU.",
    "Hard disk, RAM and power supply are not CPU parts.",
    "Monitor, keyboard and mouse are peripherals."],
  "When several processors all reside on a single chip, the computer is called a:": [
    "Correct. Several processing units on one chip makes it a multicore computer.",
    "A minicomputer (like the PDP-8) was a smaller class of computer, not about cores.",
    "A mainframe is a large computer, not defined by cores on one chip.",
    "An embedded computer is built into a device."],
  "A processor that contains multiple cores is referred to as a:": [
    "Correct. A processor with more than one core is a multicore processor.",
    "A microcontroller is a small computer on a chip for embedded use.",
    "Single-core means one core, the opposite.",
    "A coprocessor helps the main processor with special tasks."],
  "The term \"CPU\" is used for the processor in a system that has:": [
    "Correct. The slides use \"CPU\" for the processor in a system with a single processing unit.",
    "With many cores we usually say processor or multicore, not just CPU.",
    "Every computer has memory.",
    "A system with only I/O devices has no processor at all."],
  "The vacuum tube was invented in:": [
    "Correct. The vacuum tube was invented in 1906.",
    "1947 is the transistor.",
    "1964 is the IBM 360 and PDP-8.",
    "1971 is the Intel 4004."],
  "Which is a characteristic of first-generation (vacuum tube) computers?": [
    "Correct. First-generation computers were programmed in machine language and could not multitask.",
    "Integrated circuits are the third generation.",
    "They were huge and costly to run.",
    "High-level languages came with the second generation."],
  "ENIAC stands for:": [
    "Correct. ENIAC = Electronic Numerical Integrator And Computer.",
    "Not the real name.",
    "Not the real name.",
    "Not the real name."],
  "ENIAC was built at:": [
    "Correct. ENIAC was built at the University of Pennsylvania by Eckert and Mauchly.",
    "Princeton's Institute for Advanced Study built the IAS computer.",
    "Bell Labs invented the transistor.",
    "IBM did not build ENIAC."],
  "ENIAC was started in 1943 and finished in 1946. As a result:": [
    "Correct. It was finished after World War II ended, so it was too late to help the war.",
    "The moon landing was in 1969, long after ENIAC.",
    "The IBM 360 came in 1964; ENIAC did not replace it.",
    "The first minicomputer was the PDP-8."],
  "ENIAC remained in use until:": [
    "Correct. ENIAC was used until 1955.",
    "1946 is when it was finished.",
    "1964 is the IBM 360.",
    "1971 is the Intel 4004."],
  "ENIAC occupied about:": [
    "Correct. ENIAC filled about 15,000 square feet.",
    "150 square feet is far too small for 18,000 vacuum tubes.",
    "1,500 square feet is too small.",
    "150,000 square feet is far too big."],
  "ENIAC is described in the slides as the first:": [
    "Correct. The slides call ENIAC the first programmable general-purpose electronic digital computer.",
    "The first stored-program computer was IAS.",
    "The first commercial computer was UNIVAC I.",
    "The first microprocessor was the Intel 4004."],
  "The IAS computer was designed at:": [
    "Correct. IAS = Institute for Advanced Study, Princeton (von Neumann's team).",
    "The University of Pennsylvania built ENIAC.",
    "Bell Labs invented the transistor.",
    "Cambridge built EDSAC, a different machine."],
  "The IAS computer was started in ______ and completed in ______.": [
    "Correct. The IAS computer was started in 1946 and completed in 1952.",
    "1943–1946 is ENIAC.",
    "1947 is the transistor.",
    "1964 and 1971 are much later events."],
  "The IAS memory consists of:": [
    "Correct. IAS memory had 1000 words of 40 bits.",
    "4096 × 8-bit words is not IAS.",
    "Words were 40 bits; each held two 20-bit instructions.",
    "64 KB is a much later size."],
  "In the IAS computer, each instruction is:": [
    "Correct. Each IAS instruction is 20 bits: an 8-bit opcode and a 12-bit address.",
    "40 bits is a whole word, which holds two instructions.",
    "8 bits is only the opcode.",
    "16 bits is not the IAS instruction length."],
  "Which IAS register holds the address of the memory word to be read or written?": [
    "Correct. The MAR holds the address of the memory word being read or written.",
    "The MBR holds the data, not the address.",
    "The PC holds the address of the next instruction only.",
    "The AC holds ALU operands and results."],
  "Which IAS register holds a data word to be stored in or received from memory?": [
    "Correct. The MBR holds a word being stored in or received from memory.",
    "The MAR holds the address, not the data.",
    "The IR holds the current opcode.",
    "The PC holds the next instruction's address."],
  "Which IAS register temporarily holds the right-hand instruction of a word?": [
    "Correct. The IBR holds the right-hand instruction of a word until it is needed.",
    "The IR holds the opcode being executed now.",
    "The MQ holds multiplier/quotient values for the ALU.",
    "The MAR holds an address."],
  "In the IAS computer, the control unit:": [
    "Correct. The IAS control unit fetches instructions from memory and executes them one at a time.",
    "IAS did not run instructions in parallel.",
    "Memory stores the program, not the control unit.",
    "Arithmetic is done by the ALU."],
  "UNIVAC stands for:": [
    "Correct. UNIVAC = Universal Automatic Computer.",
    "Not the real name.",
    "Not the real name.",
    "UNIVAC was digital, not analog."],
  "The Eckert-Mauchly Computer Corporation later became part of:": [
    "Correct. The Eckert-Mauchly Computer Corporation became part of Sperry-Rand.",
    "IBM was a competitor.",
    "Intel was founded much later (1968).",
    "DEC was a different company (PDP machines)."],
  "The UNIVAC 1100 series was mainly used for:": [
    "Correct. The UNIVAC 1100 series was used for scientific applications.",
    "Video games did not exist on such machines.",
    "Mobile phones came decades later.",
    "Embedded systems are small built-in computers."],
  "Before building computers, IBM was a major manufacturer of:": [
    "Correct. IBM made punched-card processing equipment before it made computers.",
    "IBM did not mainly make vacuum tubes.",
    "Transistors were invented at Bell Labs.",
    "Microprocessors came much later (Intel)."],
  "The IBM 702 (1955) was designed for:": [
    "Correct. The IBM 702 (1955) was for business applications.",
    "Scientific work was the IBM 701.",
    "Artillery tables were ENIAC's job.",
    "Embedded systems came much later."],
  "The transistor was invented in 1947 at:": [
    "Correct. The transistor was invented at Bell Labs in 1947 (Shockley and others).",
    "IBM did not invent the transistor.",
    "Intel was founded in 1968.",
    "Princeton built the IAS computer."],
  "Compared with vacuum tubes, transistors are:": [
    "Correct. Transistors are smaller, cheaper and give off less heat than vacuum tubes.",
    "This is the opposite.",
    "Transistors are cooler, not hotter.",
    "Vacuum tubes are made of glass; transistors are solid-state silicon."],
  "Transistors are solid-state devices made from:": [
    "Correct. Transistors are solid-state devices made from silicon (from sand).",
    "Copper is used for wires, not the transistor itself.",
    "Glass is used for vacuum tubes.",
    "Iron is not used for transistors."],
  "Second-generation (transistor) computers introduced:": [
    "Correct. The second generation brought high-level languages and system software (plus better ALUs and more memory).",
    "Integrated circuits are the third generation.",
    "Microprocessors came even later.",
    "Cloud computing is modern."],
  "Which company produced the PDP-1?": [
    "Correct. DEC (Digital Equipment Corporation) produced the PDP-1.",
    "IBM did not make the PDP line.",
    "Intel makes processors.",
    "NCR made other machines, not the PDP-1."],
  "The main problem with second-generation computers was that transistors were:": [
    "Correct. Transistors were separate components, so machines needed tens of thousands of them wired by hand. This led to integrated circuits.",
    "Transistors were cool compared with vacuum tubes.",
    "Transistors replaced vacuum tubes.",
    "Transistors were not meant to store data by themselves."],
  "In an integrated circuit, Boolean (logical) functions are implemented by:": [
    "Correct. Gates implement Boolean functions (data processing).",
    "Memory cells store bits.",
    "A wafer is the silicon disc chips are made on.",
    "Registers store values; they do not implement logic functions."],
  "Each memory cell in an integrated circuit stores:": [
    "Correct. Each memory cell stores one bit (0 or 1).",
    "A byte needs 8 cells.",
    "An instruction needs many bits.",
    "40 bits is a whole IAS word."],
  "The correct relationship from largest to smallest is:": [
    "Correct. A silicon wafer is cut into many chips, and each chip contains many gates. So wafer → chip → gate.",
    "A chip is cut from a wafer, so the wafer is bigger than the chip.",
    "This is smallest to largest, the reverse of what was asked.",
    "Gates are inside chips, so the chip comes before the gate."],
  "Moore's Law was stated by Gordon Moore, a co-founder of:": [
    "Correct. Gordon Moore co-founded Intel (1968).",
    "IBM was not founded by Moore.",
    "ARM was founded by Acorn, VLSI and Apple.",
    "AMD is a different company."],
  "Moore originally predicted that the number of transistors on a chip would double every:": [
    "Correct. Moore first predicted doubling every year; since the 1970s it has slowed to about every 18 months.",
    "Every month would be far too fast.",
    "10 years is far too slow.",
    "5 years is far too slow."],
  "Which is a consequence of Moore's Law?": [
    "Correct. Denser chips mean shorter electrical paths, so signals travel faster and performance goes up.",
    "Chip cost stayed almost unchanged; it did not double.",
    "Smaller transistors need LESS power and cooling.",
    "Fewer interconnections increase reliability; this option says the opposite."],
  "According to Moore's Law, the cost of a chip has:": [
    "Correct. The cost of a chip remained almost unchanged while the number of transistors grew, so each transistor became much cheaper.",
    "The cost did not double.",
    "The cost did not halve every month.",
    "The cost per chip did not rise with each transistor."],
  "The IBM 360 series was introduced in:": [
    "Correct. IBM announced the System/360 in 1964.",
    "1946 is ENIAC and the start of IAS.",
    "1971 is the Intel 4004.",
    "1985 is the Intel 80386."],
  "The IBM 360 replaced the 7000 series and was:": [
    "Correct. The 360 replaced the 7000 series and was NOT compatible with it. IBM accepted this break to start a new family.",
    "It was not compatible with the 7000 series.",
    "It was a mainframe family, not a minicomputer.",
    "It was a family of computers, not a single-chip microprocessor."],
  "Within the IBM 360 family, moving to a bigger model gave:": [
    "Correct. Bigger 360 models had increasing speed, more memory and I/O ports, and higher cost, with the same (or similar) instruction set.",
    "The family kept a similar or identical instruction set.",
    "The operating system was the same or similar, so programs stayed compatible.",
    "Bigger models cost more and were faster."],
  "The IBM 360 used which interconnection structure?": [
    "Correct. The IBM 360 used a multiplexed-switch (central-switched) structure.",
    "The bus structure was introduced by the PDP-8.",
    "Wireless connection was not used in 1964 computers.",
    "The cloud is a modern service model."],
  "The DEC PDP-8 (1964) was the first:": [
    "Correct. The DEC PDP-8 was the first minicomputer.",
    "It was much smaller than a mainframe.",
    "The first microprocessor was the Intel 4004 (1971).",
    "The first stored-program computer was IAS."],
  "The PDP-8 cost about ______, compared with $100k+ for an IBM 360.": [
    "Correct. The PDP-8 cost about $16,000.",
    "$1,600 is ten times too low.",
    "$160,000 is ten times too high (closer to mainframe prices).",
    "$1,000,000 is far too high."],
  "The PDP-8 introduced which interconnection structure?": [
    "Correct. The PDP-8 introduced the bus structure, now the standard way to connect components.",
    "The multiplexed switch was used in the IBM 360.",
    "A crossbar is a different interconnection, not the PDP-8's.",
    "Fibre point-to-point links are modern."],
  "OEM use of the PDP-8 means:": [
    "Correct. OEM (Original Equipment Manufacturer) means another company builds the PDP-8 into its own system and sells the whole thing.",
    "OEM is about resale inside other products, not only the original buyer.",
    "There was no cloud in 1964.",
    "The PDP-8 had memory."],
  "Before semiconductor memory, main memory was made of ferromagnetic cores, which were:": [
    "Correct. Core memory was expensive, bulky, and reading a value destroyed it (destructive readout), so it had to be rewritten.",
    "Core memory was neither cheap nor tiny.",
    "Core memory was slower than semiconductor memory.",
    "Core memory was made of tiny magnetic rings, not on silicon wafers."],
  "In 1970, Fairchild introduced a semiconductor memory chip about the size of a single core that held:": [
    "Correct. Fairchild's 1970 chip held 256 bits in the space of one core, read without destroying data, and was much faster.",
    "256 bytes would be 8 times more than the real chip.",
    "1 KB is too large for that chip.",
    "64 KB is far too large."],
  "The Intel 4004 (1971) was a ______ microprocessor.": [
    "Correct. The 4004 was a 4-bit microprocessor.",
    "8-bit was the 8008 and 8080.",
    "16-bit was the 8086.",
    "32-bit was the 80386."],
  "The Intel 8008 (1972) was:": [
    "Correct. The 8008 (1972) was 8-bit and, like the 4004, designed for specific applications.",
    "16-bit general-purpose was the 8086.",
    "4-bit was the 4004.",
    "32-bit came in the 1980s."],
  "Powerful, general-purpose 16-bit microprocessors such as the 8086 appeared:": [
    "Correct. 16-bit general-purpose microprocessors such as the 8086 appeared at the end of the 1970s.",
    "1946 was the vacuum-tube era.",
    "1964 was the IBM 360 and PDP-8.",
    "2006 is the era of multicore Core 2 chips."],
  "In 1981, which companies introduced a 32-bit single-chip processor?": [
    "Correct. In 1981 Bell Labs and Hewlett-Packard developed 32-bit single-chip processors.",
    "IBM and DEC were not the companies named.",
    "Intel's 32-bit chip (80386) came in 1985.",
    "ARM and Apple are not the 1981 pair."],
  "The addressable memory of the Intel 8086 was:": [
    "Correct. The 8086 could address 1 MB of memory.",
    "64 KB was the limit of earlier 8-bit chips.",
    "640 bytes is far too small.",
    "4 GB is the 32-bit limit (80386 era)."],
  "The x86 instruction set has about ______ instructions, with roughly one added per month.": [
    "Correct. x86 has about 500 instructions, with roughly one added each month over its history.",
    "50 is far too few.",
    "5,000 is far too many.",
    "50,000 is far too many."],
  "Any program written for an older x86 processor can run on a newer one because the ISA is:": [
    "Correct. Backward compatibility means the new processors still understand the old instructions.",
    "If it were rewritten every year, old programs would break.",
    "x86 is not based on ARM.",
    "The ISA is part of the processor, not stored in the cloud."],
  "The x86 architecture is dominant:": [
    "Correct. x86 dominates desktops, laptops and servers, i.e. outside embedded systems. ARM dominates embedded systems.",
    "Embedded systems are ARM's main area.",
    "Mobile phones mostly use ARM.",
    "x86 is used in far more than supercomputers."],
  "ARM evolved from which design approach?": [
    "Correct. ARM evolved from the RISC (Reduced Instruction Set Computer) approach.",
    "CISC is the x86 style.",
    "Vacuum tubes are first-generation hardware.",
    "Core memory is old storage hardware."],
  "An embedded system is:": [
    "Correct. An embedded system is a computer inside a product for one dedicated job, not a general-purpose computer.",
    "A mainframe is general-purpose and large.",
    "A cloud service runs on remote servers.",
    "A benchmark is a test program."],
  "Which is an example of an embedded system?": [
    "Correct. Anti-lock brakes have a small computer with one dedicated job inside the car.",
    "A web server farm is made of general-purpose servers.",
    "A desktop PC is general-purpose.",
    "Google Apps is cloud software (SaaS)."],
  "The Internet of Things (IoT) is mainly driven by:": [
    "Correct. IoT is driven by deeply embedded devices: small connected sensors and appliances.",
    "Mainframes are large central computers, not what drives IoT.",
    "Vacuum tubes are obsolete.",
    "Punched cards are obsolete."],
  "ARM processors are designed by ARM Inc. (Cambridge, England) and then:": [
    "Correct. ARM designs the processors and licenses the designs to chip manufacturers.",
    "ARM does not mainly sell chips itself.",
    "ARM chips are used by many companies, not only IBM.",
    "ARM designs are not given away with Windows."],
  "ARM Ltd. was founded by:": [
    "Correct. ARM Ltd. was founded by Acorn, VLSI Technology and Apple Computer.",
    "Intel and AMD are x86 companies.",
    "IBM and DEC are not ARM's founders.",
    "Bell Labs and HP made the 1981 32-bit chips."],
  "The ARM Cortex-M family is aimed at:": [
    "Correct. Cortex-M is for microcontrollers. (Cortex-A is for applications and Cortex-R is for real-time.)",
    "Supercomputers are not the Cortex-M target.",
    "Mainframes are not the Cortex-M target.",
    "Cloud servers use other chips."],
  "Apple's A-series chip is a system-on-a-chip (SoC). Which part does on-device AI/ML?": [
    "Correct. The Neural Engine is the part of the SoC built for AI and machine learning work.",
    "The GPU does graphics.",
    "The image processor handles camera images.",
    "The memory controller manages memory access."],
  "NIST describes cloud computing as a model for:": [
    "Correct. NIST defines cloud computing as on-demand network access to a shared pool of configurable computing resources.",
    "Vacuum tubes have nothing to do with cloud computing.",
    "Measuring CPU speed is benchmarking.",
    "Designing instruction sets is architecture."],
  "Google Apps, Microsoft Office 365 and Dropbox are examples of:": [
    "Correct. Google Apps, Office 365 and Dropbox are ready-made applications for end users: SaaS.",
    "PaaS is a platform for developers.",
    "IaaS gives raw servers and storage.",
    "DaaS is not one of the slide models."],
  "Windows Azure and Google App Engine, which give tools to build and deploy applications, are examples of:": [
    "Correct. Azure and App Engine give developers a platform to build and deploy apps: PaaS.",
    "SaaS gives finished apps.",
    "IaaS gives raw infrastructure.",
    "DaaS is not one of the slide models."],
  "Access to processing, storage and networks (e.g. Amazon Web Services, Google Compute Engine) is:": [
    "Correct. Renting processing, storage and networks is IaaS.",
    "SaaS gives applications.",
    "PaaS gives a development platform.",
    "DaaS is not one of the slide models."],
  "Which is NOT one of the key parameters for assessing a computer listed in the slides?": [
    "Correct (NOT a key parameter). The colour of the case does not affect how well a computer works.",
    "Performance IS a key parameter.",
    "Power consumption IS a key parameter.",
    "Reliability IS a key parameter."],
  "The time between two clock pulses is called the:": [
    "Correct. The time between pulses is the cycle time, τ = 1/f.",
    "The clock rate is pulses per second (f), not the time between them.",
    "CPI is cycles per instruction.",
    "MIPS is a speed rate."],
  "If the clock rate is f, the cycle time τ is:": [
    "Correct. τ = 1/f. A faster clock gives a shorter cycle.",
    "f × 2 is not a time.",
    "f / 2 is not the cycle time.",
    "f² has no meaning here."],
  "1 GHz equals:": [
    "Correct. Giga = 10⁹, so 1 GHz = 10⁹ Hz.",
    "10⁶ Hz is 1 MHz.",
    "10³ Hz is 1 kHz.",
    "10¹² Hz is 1 THz."],
  "CPI means:": [
    "Correct. CPI = average clock cycles per instruction.",
    "Not the meaning.",
    "Characters per inch is a printing term.",
    "Not the meaning."],
  "MIPS stands for:": [
    "Correct. MIPS = millions of instructions per second.",
    "Not the meaning.",
    "Not the meaning.",
    "Not the meaning."],
  "The MIPS rate can be calculated as:": [
    "Correct. MIPS = f / (CPI × 10⁶): instructions per second, in millions.",
    "CPI × f is not a rate of instructions.",
    "Ic × CPI is the total number of cycles.",
    "10⁶ / f is not the MIPS formula."],
  "The average CPI of a program depends on:": [
    "Correct. CPI is a weighted average over the instruction mix: how many instructions of each type run and how many cycles each takes.",
    "The clock rate does not change how many cycles each instruction needs.",
    "Screen size has nothing to do with CPI.",
    "Colour depth has nothing to do with CPI."],
  "Programs designed to test performance are called:": [
    "Correct. Programs written to test and compare performance are benchmarks.",
    "A compiler translates programs.",
    "A driver controls a device.",
    "Firmware is software stored in hardware."],
  "A good benchmark program is:": [
    "Correct. A good benchmark is in a high-level language (portable), easy to measure and widely distributed.",
    "Machine code ties it to one processor.",
    "Benchmarks must be public so results can be compared.",
    "A benchmark must give repeatable results."],
  "SPEC stands for:": [
    "Correct. SPEC = System Performance Evaluation Corporation.",
    "Not the real name.",
    "Not the real name.",
    "Not the real name."],
  "Which SPEC suite measures 3D graphics performance?": [
    "Correct. SPECviewperf measures 3D graphics.",
    "SPECjbb2015 is server-side Java.",
    "SPECsfs2014 is file servers.",
    "SPEC CPU2017 is processor-intensive work."],
  "SPECsfs2014 evaluates:": [
    "Correct. SPECsfs2014 tests file servers (speed and request handling).",
    "3D graphics is SPECviewperf.",
    "Java is SPECjbb.",
    "Cloud IaaS is SPEC Cloud."],
  "Amdahl's Law shows that the speedup from using more processors is limited by:": [
    "Correct. The serial part (1 − f) never gets faster, so the speedup can never exceed 1/(1 − f).",
    "Disk size is not part of the formula.",
    "The clock rate is not the limit in Amdahl's Law.",
    "The number of benchmarks has no effect."],
  "The base (radix) r of a number system tells us:": [
    "Correct. Base r uses r digits, from 0 to r − 1.",
    "Register size is hardware, not the base.",
    "ALU size is not the base.",
    "The base does not fix the number of decimal places."],
  "The digits allowed in base 8 are:": [
    "Correct. Base 8 uses 0 to 7.",
    "8 is not an octal digit (it would be written 10).",
    "Digits start at 0, and 8 is not allowed.",
    "0 to 9 are decimal digits."],
  "Why can 1011 be a number in binary, octal, decimal and hexadecimal?": [
    "Correct. 1011 only uses 0 and 1, and both digits exist in every base. Its value is different in each base.",
    "Each base has different weights (powers of 2, 8, 10, 16).",
    "It is eleven only in binary.",
    "Having four digits is not the reason."],
  "The dot that separates the integer part from the fractional part in any base is called the:": [
    "Correct. In any base it is called the radix point.",
    "\"Decimal point\" is only its name in base 10.",
    "\"Binary point\" is only its name in base 2.",
    "The sign bit is the MSB of a signed number."],
  "Digits to the right of the radix point are multiplied by:": [
    "Correct. Positions after the point use r⁻¹, r⁻², …, e.g. 0.1₂ = 2⁻¹ = 0.5.",
    "Positive powers are for digits left of the point.",
    "Only the first position uses r¹, and that is on the left.",
    "Multiplying by zero would make every fraction 0."],
  "To convert a decimal integer to another base r, we:": [
    "Correct. Divide by r again and again and read the remainders from the bottom (the last remainder is the MSB).",
    "Multiplying by r is for converting fractions.",
    "Grouping bits is for binary ↔ octal/hex.",
    "Adding digits does not convert bases."],
  "To convert a decimal fraction to binary, we:": [
    "Correct. Multiply the fraction by 2 repeatedly; each integer part (0 or 1) is the next bit.",
    "Dividing by 2 is for the integer part.",
    "Grouping into 3 bits is binary → octal.",
    "Subtracting powers of 10 is not the method."],
  "A group of four binary digits is called a:": [
    "Correct. Four bits are a nibble, which is one hex digit.",
    "A byte is 8 bits.",
    "A word depends on the machine (16, 32, 64 bits…).",
    "The radix is the base of a number system."],
  "To convert binary to octal, group the bits into:": [
    "Correct. 2³ = 8, so each octal digit is 3 bits.",
    "4-bit groups are for hexadecimal.",
    "2-bit groups would give base 4.",
    "8-bit groups are bytes, not octal."],
  "When grouping binary into hexadecimal, the groups are formed:": [
    "Correct. Start at the radix point and go outwards: left for the integer part, right for the fraction. Pad the ends with 0s.",
    "Grouping from the left end gives wrong digits (a common mistake).",
    "The fraction is grouped from the point to the right, so this is only half right.",
    "Grouping is never random."],
  "Which is NOT a reason given for using hexadecimal notation?": [
    "Correct (NOT a reason). Hex is only a way for people to write binary; the computer still calculates in binary.",
    "This IS a reason: hex is more compact.",
    "This IS a reason: data often comes in multiples of 4 bits.",
    "This IS a reason: hex converts easily to and from binary."],
  "In hexadecimal, the digit E has the decimal value:": [
    "Correct. Counting on from A = 10: B = 11, C = 12, D = 13, E = 14.",
    "13 is D.",
    "15 is F.",
    "12 is C."],
  "Base 60 is known as the:": [
    "Correct. Base 60 is the sexagesimal system (we still use it for minutes and seconds).",
    "Duodecimal is base 12.",
    "Octal is base 8.",
    "Base-64 is a way to encode data, not base 60."],
  "Base 12 is called:": [
    "Correct. Base 12 is duodecimal (think of a dozen).",
    "Sexagesimal is base 60.",
    "Hexadecimal is base 16.",
    "Octal is base 8."],
  "Base-64 is commonly used for:": [
    "Correct. Base-64 is used to encode binary data as text for transmission (for example email attachments).",
    "Telling the time uses base 60.",
    "Counting in dozens is base 12.",
    "Floating-point numbers use the IEEE 754 format."],
  "In BCD, each decimal digit is represented by:": [
    "Correct. BCD uses 4 bits for each decimal digit (0000 to 1001).",
    "3 bits only give 8 values, too few for 0–9.",
    "7 bits is the size of an ASCII character.",
    "8 bits is a byte (an EBCDIC character)."],
  "ASCII stands for:": [
    "Correct. ASCII = American Standard Code for Information Interchange.",
    "Not the real name.",
    "Not the real name.",
    "Not the real name."],
  "7-bit ASCII can represent:": [
    "Correct. 2⁷ = 128 characters.",
    "256 is 8-bit (EBCDIC).",
    "64 is 6-bit.",
    "512 is 9-bit."],
  "EBCDIC stands for:": [
    "Correct. EBCDIC = Extended Binary Coded Decimal Interchange Code (from IBM).",
    "Not the real name.",
    "Not the real name.",
    "Not the real name."],
  "EBCDIC uses an 8-bit code, so it can represent:": [
    "Correct. 2⁸ = 256 characters.",
    "128 is a 7-bit code (ASCII).",
    "64 is a 6-bit code.",
    "1024 would need 10 bits."],
  "In the binary number 1001.10, the leftmost 1 has a weight of:": [
    "Correct. 1001 has positions 3, 2, 1, 0 from the left, so the leftmost 1 is worth 2³ = 8.",
    "2⁴ would be a fifth digit before the point; there are only four.",
    "2² is the second digit from the left.",
    "2⁰ is the last digit before the point."],
  "Binary is the natural language of digital electronics because circuits have:": [
    "Correct. A digital signal has two states (on/off, high/low), which match the two binary digits 1 and 0.",
    "Circuits do not use ten states; that would be decimal.",
    "Sixteen states would be hexadecimal; hex is only a notation.",
    "Circuits do have states, exactly two."],
  "Which unit does \"the calculations\", with everything else in the computer there to service it?": [
    "Correct. The ALU does the calculations; the other units serve it.",
    "The control unit controls; it does not do the calculations.",
    "Main memory stores data.",
    "An I/O module connects devices."],
  "The ALU handles integers and:": [
    "Correct. The ALU always handles integers and may also handle floating-point numbers (or a separate FPU does).",
    "The ALU works with numbers, not only characters.",
    "Keyboard input goes through I/O; the ALU never reads the keyboard directly.",
    "The ALU handles negative numbers (in 2's complement)."],
  "An advantage of unsigned magnitude is:": [
    "Correct. Unsigned has one zero and very simple addition.",
    "Unsigned cannot show negative numbers; that is its disadvantage.",
    "Unsigned has only one zero.",
    "Unsigned has no sign bit."],
  "10011101 as an unsigned number is:": [
    "Correct. Unsigned: 128 + 16 + 8 + 4 + 1 = 157.",
    "−29 is the signed-magnitude reading.",
    "−99 is the 2's complement reading (−128 + 29).",
    "29 ignores the MSB."],
  "The three methods to represent negative binary numbers are:": [
    "Correct. Signed magnitude, 1's complement and 2's complement are the three ways to show negative numbers.",
    "BCD, ASCII and EBCDIC are codes for digits and characters.",
    "Octal, decimal and hexadecimal are number bases.",
    "Add-shift, Booth and restoring are multiplication and division methods."],
  "In all three signed representations (sign-magnitude, 1's and 2's complement), positive numbers are:": [
    "Correct. Positive numbers look the same in all three (sign bit 0, normal binary). Only negatives differ.",
    "Positive numbers are not inverted.",
    "A sign bit of 1 means negative.",
    "BCD is a different code."],
  "Which is a drawback of sign-magnitude representation?": [
    "Correct. The hardware must look at signs before adding or subtracting, and there are two zeros (+0 and −0).",
    "Sign-magnitude can show positive numbers.",
    "It does have a sign bit.",
    "It has two zeros, which is the problem."],
  "In sign-magnitude, the negation of a number is formed by:": [
    "Correct. In sign-magnitude you only flip the sign bit to negate.",
    "Invert all and add 1 is 2's complement negation.",
    "Invert all bits is 1's complement negation.",
    "Shifting left multiplies by 2."],
  "In 1's complement, a negative number is formed by:": [
    "Correct. 1's complement negative = flip every bit of the positive number (sign bit included).",
    "Adding 1 after inverting gives 2's complement.",
    "Changing only the sign bit is sign-magnitude.",
    "Shifting right divides by 2."],
  "The two rules for forming the 2's complement are:": [
    "Correct. Take the 1's complement (flip every bit), then add 1.",
    "Adding 1 then flipping only the sign bit is not the rule.",
    "Shifting is not part of the rule.",
    "Subtracting 1 first is a different (equivalent) trick, but not the two rules in the slides."],
  "The range of n-bit 2's complement is:": [
    "Correct. n-bit 2's complement: −2ⁿ⁻¹ to +(2ⁿ⁻¹ − 1), e.g. 8 bits: −128 to +127.",
    "This symmetric range is sign-magnitude / 1's complement.",
    "0 to 2ⁿ − 1 is unsigned.",
    "±2ⁿ needs more bits than n."],
  "In 8-bit 2's complement, the MSB has a weight of:": [
    "Correct. The MSB is worth −128, so 10000011 = −128 + 2 + 1 = −125.",
    "+128 is the unsigned weight of the MSB.",
    "−127 is not the weight of a single bit.",
    "+1 is the weight of the LSB."],
  "Which is an advantage of 2's complement listed in the slides?": [
    "Correct. Subtraction is just addition of the 2's complement, so one adder does both.",
    "2's complement has only one zero.",
    "It can still overflow.",
    "It is for signed numbers."],
  "When adding two n-bit 2's complement numbers, a carry out of the MSB is:": [
    "Correct. The carry out of the MSB is discarded; overflow is checked with the sign rule instead.",
    "A carry out is not always overflow (e.g. −1 + 1).",
    "Adding the carry back is the 1's complement end-around carry, not 2's complement.",
    "The carry is not put into the sign bit."],
  "Overflow can only occur when adding two numbers that:": [
    "Correct. Only two numbers with the same sign can overflow (the result gets the wrong sign).",
    "A positive plus a negative always lands between them, so it can never overflow.",
    "0 + 0 = 0 never overflows.",
    "Odd or even does not matter."],
  "A − B in 2's complement is computed as:": [
    "Correct. A − B = A + (2's complement of B).",
    "Complementing A is wrong; you complement the number being subtracted (B).",
    "B − A is the opposite subtraction.",
    "Complementing the sum gives −(A + B)."],
  "In the add-shift multiplication method, when the current multiplier bit Q₀ is 1:": [
    "Correct. If Q₀ = 1, add M to A, then shift C, A and Q right by one place.",
    "Only shifting is for Q₀ = 0.",
    "Subtracting M is used in Booth's algorithm and division, not add-shift.",
    "The add-shift method shifts right, not left."],
  "In the add-shift multiplication hardware, which register stays unchanged?": [
    "Correct. M (the multiplicand) stays the same the whole time.",
    "A changes (M is added to it and it is shifted).",
    "Q is shifted every cycle.",
    "C receives the carry and is shifted."],
  "Multiplying two n-bit unsigned numbers needs a result of:": [
    "Correct. An n-bit × n-bit product can need 2n bits, so it is held in A and Q together.",
    "n bits is too small, e.g. 15 × 15 = 225 needs 8 bits for 4-bit inputs.",
    "n + 1 bits is still too small.",
    "4n bits is more than needed."],
  "Running addition of partial products in the add-shift method:": [
    "Correct. Adding each partial product as you go means you never store them all, saving registers.",
    "It needs fewer registers, not more.",
    "Add-shift works for unsigned numbers.",
    "It is a multiplication method."],
  "Booth's algorithm was invented by Andrew Donald Booth in the:": [
    "Correct. Andrew Donald Booth invented the algorithm in the 1950s (1951).",
    "The 1940s is too early.",
    "The 1970s is too late.",
    "The 1990s is far too late."],
  "In Booth's algorithm, when Q₀Q₋₁ = 00 or 11:": [
    "Correct. 00 or 11 means no change in the run of bits: just arithmetic shift right.",
    "Add then shift is for 01.",
    "Subtract then shift is for 10.",
    "The algorithm stops after n cycles, not because of 00 or 11."],
  "In Booth's algorithm, when Q₀Q₋₁ = 10:": [
    "Correct. 10 = start of a run of 1s: A ← A − M, then arithmetic shift right.",
    "Add is for 01.",
    "Shift only is for 00 and 11.",
    "Booth's algorithm always shifts right."],
  "An advantage of Booth's algorithm is that it:": [
    "Correct. Booth's algorithm multiplies signed 2's complement numbers directly, often with fewer additions and subtractions.",
    "Its point is that it works for signed numbers.",
    "It uses A, Q, Q₋₁ and M registers.",
    "It is a multiplication method."],
  "In restoring division, each cycle begins by:": [
    "Correct. Each cycle starts by shifting A and Q left one place.",
    "Division shifts left, not right (right is used in multiplication).",
    "M is subtracted from A, not added to Q.",
    "M is never cleared; it is the divisor."],
  "In restoring division, if A < 0 after A − M, then:": [
    "Correct. If A went negative, M did not fit: set Q₀ = 0 and restore A by adding M back.",
    "Q₀ = 1 is when A ≥ 0.",
    "The division continues for n cycles.",
    "M is not shifted."],
  "At the end of restoring division, the quotient and remainder are in:": [
    "Correct. The quotient ends up in Q and the remainder in A.",
    "This swaps them.",
    "M keeps the divisor.",
    "C is not used in restoring division."],
  "A floating-point number is represented as:": [
    "Correct. A floating-point number is ± S × B^(±E): sign, significand, base and exponent.",
    "The parts are multiplied, not added.",
    "2ⁿ − 1 is the largest unsigned value.",
    "BCD digits are a decimal code."],
  "In the 32-bit floating-point format, the fields are:": [
    "Correct. 32-bit format: 1 sign bit + 8 exponent bits + 23 significand bits = 32.",
    "11-bit exponent is the 64-bit format.",
    "The sign is only 1 bit.",
    "The exponent is 8 bits and the significand 23, not the other way round."],
  "The bias for an 8-bit exponent is:": [
    "Correct. Bias = 2^(k−1) − 1 = 2⁷ − 1 = 127 for an 8-bit exponent.",
    "128 is one too many.",
    "255 is the largest 8-bit value.",
    "256 does not fit in 8 bits."],
  "A floating-point number is normalised when:": [
    "Correct. Normalised means the leading significand bit is 1, so it does not need to be stored (23 stored bits give 24 bits of precision).",
    "The exponent can be any value.",
    "The sign can be 0 or 1.",
    "All 0s means zero, not normalised."],
  "IEEE 754 was adopted in ______ and revised in ______.": [
    "Correct. IEEE 754 was adopted in 1985 and revised in 2008.",
    "1971 and 1985 are wrong.",
    "1946–1952 is the IAS computer.",
    "2008 is the revision, not the first year."],
  "IEEE 754 defines 32-, 64- and 128-bit formats with exponents of:": [
    "Correct. 32-bit uses an 8-bit exponent, 64-bit uses 11 bits, 128-bit uses 15 bits.",
    "16 and 32 are not the IEEE exponent sizes.",
    "7, 10 and 14 are each one too few.",
    "11, 15 and 23 mixes exponent and significand sizes."],
  "A negative exponent that is less than the minimum possible value causes:": [
    "Correct. The number is too small for the exponent range: exponent underflow (it may become 0).",
    "Exponent overflow is when the exponent is too large.",
    "Significand overflow is a carry out when adding significands.",
    "Significand underflow is digits lost off the right when aligning."],
  "When aligning significands, digits flowing off the right end cause:": [
    "Correct. Shifting a significand right to align it can push digits off the right end: significand underflow.",
    "Significand overflow is a carry out of the MSB when adding.",
    "Exponent overflow is when the exponent is too large.",
    "Exponent underflow is when the exponent is too small."],
  "Floating-point addition and subtraction are more complicated than multiplication because they need:": [
    "Correct. Before adding, the exponents must be made equal by shifting one significand (alignment).",
    "The bias is fixed; it does not make addition harder.",
    "Normalisation is still needed after adding.",
    "BCD has nothing to do with floating point."],
  "Why do we need floating point instead of fixed point (e.g. 2's complement)?": [
    "Correct. Fixed point has a limited range, so it cannot show very large numbers (like 9.76 × 10¹⁴) or very small fractions. Floating point works like scientific notation.",
    "Fixed point can represent zero.",
    "2's complement has a sign bit (the MSB).",
    "Floating point is not about saving bits for integers."],
};
