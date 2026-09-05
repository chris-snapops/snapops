# SnapCalc

SnapCalc is an iOS calculator. The goal is a phone calculator that looks and behaves like a real physical scientific calculator, in the spirit of the Android app ChampCalc (which never made it to iOS). It uses an arbitrary-precision math engine under the hood, so results aren't limited by normal floating-point rounding the way most phone calculators are.

It's fast, it's got big buttons that feel clicky, and it's extremely intuitive for anyone who grew up using a scientific calculator.

## Two calculator modes

**Main Calculator** is the default experience: a full physical-style keypad with no text-entry keyboard. Every button press is handled directly, and the equation display supports cursor movement, text selection, and copy.

**Advanced Calculator** is a stripped-down, keyboard-driven mode for people who'd rather type an expression directly (including pasting one in) rather than tap buttons. You can switch into it from Settings, and switch back out again from there too.

## Everyday math

- Standard arithmetic with parentheses, order of operations, and an "ans" button to reuse the last result.
- A `±` sign-toggle key, percent key, and a scientific-notation entry key (`EE`) for typing numbers like `1.5E10`.
- Long, exact results: precision is adjustable from 1 to 100 digits in Settings, and calculations are done with arbitrary-precision arithmetic rather than standard double-precision floats.
- Repeating decimals are detected and shown with a bar over the repeating digits (e.g. `0.6̅` instead of `0.666666...`).
- Results can be grouped with spaces or commas every 3 (or 4, in binary) digits, or left unformatted — your choice in Settings.

## Scientific functions

- Trig: sin, cos, tan, and their reciprocal (csc, sec, cot) and hyperbolic (sinh, cosh, tanh, csch, sech, coth) variants, all with inverse forms. A single button on the keypad cycles through TRIG / reciprocal-TRIG / HYP / reciprocal-HYP, and long-pressing any trig key gives you its inverse.
- Logs: natural log (ln) and log base 10.
- Powers and roots: square, cube, arbitrary power (nʸ), reciprocal, square root, and nth root.
- Factorials, permutations (nPr), and combinations (nCr).
- GCD and LCM.
- Modulo, absolute value, and sign.
- A random number button.
- π, e, and imaginary number support (with a choice of *i* or *j* as the symbol).

## Number bases

Switch between decimal, hexadecimal, and binary with the BASE button. The keypad automatically shows only the digits valid for the current base, and whatever equation and result are on screen get converted to the new base on the fly, so you don't lose your work switching bases mid-calculation.

In binary and hex, a set of bitwise operators is available: NOT, AND, OR, XOR, NAND, NOR, and XNOR.

## Result styles

A SMPL button cycles the result style between:
- **Number** — a decimal approximation.
- **Rational** — exact fractions and symbolic forms where possible (e.g. `sin(π/4)` shows as `√2/2` instead of a decimal).
- **Scientific** — scientific notation.

An ANGL button cycles the angle unit used by trig functions between radians, degrees, and gradians.

## Equation solving

Ending an equation with the `=0` button (instead of the plain `=`) treats it as "solve for x" using `𝓍`, `𝑦`, or `𝑧` as the unknown, and returns the full solution set, e.g. `𝓍² − 16 = 0` gives `𝓍 ∈ { 4, -4 }`.

## History

Every calculation is saved automatically. Press the up/down arrows to step back through previous equations and results right on the keypad, or open the History screen to see a full list, expand any entry for details (full formatted equation, mode, timestamp), and insert an old equation back into the current one.

## Memory

Nine memory slots (V1–V9) let you store the current result and recall it later into any equation, from the Memory screen.

## Currency conversion

The Currency screen fetches live exchange rates and lets you pick any two currencies (searchable by country or currency name, not just the 3-letter code) to insert the conversion rate directly into your equation. It remembers your five most recent currency pairs, and there's a dedicated keypad button that inserts your last-used rate with a single tap.

## Customization (Settings)

- Haptic feedback on/off, and how long you need to hold a key before its secondary (shift) function triggers.
- Bracket coloring (matching colors for nested parentheses) and bracket highlighting (highlights the matching bracket pair near your cursor).
- Precision (1–100 digits) and result number grouping (space, comma, or off).
- Default simplify mode and angle unit for new sessions.
- Choice of symbols for decimal point (`.` or `,`), multiplication (`×`, `•`, or `*`), division (`÷` or `/`), and imaginary numbers (`𝑖` or `𝑗`).
- A one-tap reset back to defaults.

## Quick launch

SnapCalc includes an iOS Control Center widget/button so you can jump straight into the app from the lock screen or Control Center without hunting for the icon.
