# JavaScript Bug: Loose Equality and Null Handling

This repository demonstrates a common JavaScript bug related to loose equality (`==`) and the handling of `null` values. The bug arises from using loose equality, which performs type coercion before comparison, leading to unexpected results when comparing values of different types or with `null/undefined`.

The original code attempts to add two numbers; however, it uses loose equality which does not properly handle `null` input resulting in incorrect behavior.

## Bug Description
The `foo` function aims to add two numbers, but it fails to correctly handle cases where one or both input parameters are `null`.  The loose equality check (`==`) leads to incorrect comparisons with `null`, causing unexpected outputs.

## Solution
The solution demonstrates using strict equality (`===`) to prevent type coercion, ensuring that `null` is only considered equal to `null` and not to other values like 0. This provides clearer and more predictable behavior.

## How to Run
1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in a code editor.
3. Run `bug.js` to see the buggy behavior.
4. Run `bugSolution.js` to observe the corrected output.

This example highlights the importance of using strict equality when dealing with `null` and `undefined` to avoid unexpected behavior in JavaScript.