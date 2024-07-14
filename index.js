import nerdamer from "nerdamer";
import "nerdamer/Algebra.js";
import "nerdamer/Calculus.js";
import "nerdamer/Solve.js";
import { evaluate, simplify } from "mathjs";
import Diagon from "diagonjs";

import { analogies, equations, getRandomInt, names } from "./equations.js";

function buildEquation(equation, max_depth = 1, depth = 0) {
  const find =
    equation.variables[Math.floor(Math.random() * equation.variables.length)];

  const problem = {
    equation: nerdamer(equation.equation).solveFor(find).toString(),
    find,
    iv: [],
  };

  problem.steps = [
    find + " = " + simplify(problem.equation, { exactFractions: true }),
  ];
  problem.given = [
    ...new Set(
      equation.variables
        .filter((variable) => variable !== find)
        .flatMap((variable) => {
          const otherEquation = equations.find(
            (other) =>
              other.equation !== equation.equation &&
              other.variables.includes(variable) &&
              !other.variables.includes(find),
          );

          if (otherEquation) {
            const equated = simplify(
              nerdamer(otherEquation.equation).solveFor(variable).toString(),
              { exactFractions: true },
            ).toString();

            problem.steps.push(
              variable + " = " + simplify(equated, { exactFractions: true }),
            );
            problem.equation = problem.equation.replace(
              variable,
              `(${equated})`,
            );

            problem.iv.push(...otherEquation.variables);
            return otherEquation.variables.filter(
              (otherVariable) =>
                otherVariable !== variable && otherVariable !== find,
            );
          }
          return variable;
        }),
    ),
  ];

  problem.equation =
    find + " = " + simplify(problem.equation, { exactFractions: true });
  return problem;
}

function buildProblem({ find, given }) {
  let q = analogies.find((fn) => fn({ find, given }));
  if (q) return q({ find, given });

  const vals = { Na: "602200000000000000000000" };
  for (const k of given) vals[k] = getRandomInt(1, 15);
  return {
    str: `Find the ${names[find] || find}, if ${given.map((item, i) => `${i === given.length - 1 && given.length > 1 ? "and " : ""}${names[item] || item} is ${vals[item]}`).join(", ")}\n${JSON.stringify({ find, given })}`,
    vals,
  };
}

console.clear();
console.log();
const equation = buildEquation(
  equations[Math.floor(Math.random() * equations.length)],
);
const problem = buildProblem(equation);

const diagon = await Diagon.init();
// Colorize
// let i = 0;
// for (const term of [equation.find, ...equation.given, ...equation.iv]) {
//   equation.equation = equation.equation.replaceAll(term, colors[i](term));
//   stepText = stepText.replaceAll(term, colors[i++](term));
// }

console.log(problem.str);
console.log();
console.log();
console.log();

let eqn = equation.equation;
let steps = [...equation.steps];
Object.entries(names).forEach((n) => {
  eqn = eqn.replaceAll(n[0], n[1].replaceAll(" ", "·"));
  steps = steps.map((step) => step.replaceAll(n[0], n[1].replaceAll(" ", "·")));
});

for (const step of steps) {
  console.log(
    diagon.translate
      .math(step, { style: "Unicode" })
      .replace(/([^\s])·([^\s])/g, "$1 $2"),
  );
  console.log();
}
console.log(
  diagon.translate
    .math(eqn, { style: "Unicode" })
    .replace(/([^\s])·([^\s])/g, "$1 $2"),
);
let withVals = eqn;
for (const [k, v] of Object.entries(problem.vals)) {
  withVals = withVals.replaceAll(
    (names[k] || k).replaceAll(" ", "·"),
    v.toString(),
  );
}

console.log(
  diagon.translate
    .math(withVals + "=" + evaluate(equation.equation, problem.vals), {
      style: "Unicode",
    })
    .replace(/([^\s])·([^\s])/g, "$1 $2"),
);
