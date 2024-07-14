import nerdamer from "nerdamer";
import "nerdamer/Algebra.js";
import "nerdamer/Calculus.js";
import "nerdamer/Solve.js";
import { simplify } from "mathjs";

import { equations, names } from "./equations.js";
import build from "next/dist/build/index.js";

// for (const { equation, variables } of equations) {
//   console.log(equation);
//   console.log("=".repeat(equation.length));
//   for (const variable of variables) {
//     console.log(
//       variable,
//       "=",
//       simplify(nerdamer(equation).solveFor(variable).toString()).toString(),
//     );
//   }
//   console.log();
// }

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function buildEquation(equation, max_depth = 1, depth = 0) {
  const find =
    equation.variables[Math.floor(Math.random() * equation.variables.length)];

  const problem = {
    find,
    given: [
      ...new Set(
        equation.variables
          .filter((variable) => variable !== find)
          .flatMap((variable) => {
            const otherEquation = equations.find(
              (other) =>
                other.equation !== equation.equation &&
                other.variables.includes(variable),
            );

            if (otherEquation)
              return otherEquation.variables.filter(
                (otherVariable) => otherVariable !== variable,
              );
            return variable;
          }),
      ),
    ],
  };

  return problem;
}

function buildProblem({ find, given }) {
  return `Find the ${names[find] || find}, if ${given.map((item, i) => `${i === given.length - 1 ? "and " : ""}${names[item] || item} is ${getRandomInt(1, 15)}`).join(", ")}`;
}

const equation = buildEquation(
  equations[Math.floor(Math.random() * equations.length)],
);
const problem = buildProblem(equation);

console.log(problem);
