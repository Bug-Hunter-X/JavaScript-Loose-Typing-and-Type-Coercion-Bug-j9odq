# JavaScript Loose Typing and Type Coercion Bug

This repository demonstrates a common error in JavaScript related to loose typing and type coercion.  The `+` operator in JavaScript exhibits different behaviors depending on the data types involved. When one of the operands is a string, it performs string concatenation instead of numerical addition. This can result in unexpected output and difficult-to-find errors.

The `bug.js` file contains the erroneous code.  `bugSolution.js` provides a corrected version that explicitly handles type checking to prevent this issue.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and run it. Observe the unexpected outputs.
3. Open `bugSolution.js` and observe how explicit type checking prevents this problem. 

## Lesson
This example highlights the importance of careful type handling in JavaScript to prevent unexpected type coercion.  Always be mindful of your data types and use explicit type checks or type conversion functions when necessary to avoid this common pitfall.