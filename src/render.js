import Diagon from "diagonjs";
import { evaluate } from "mathjs";
import { names } from "./equations.js";
import { units } from "./data.js";

export async function render(equation, problem) {
  console.clear();
  console.log();
  console.log(problem.str);
  console.log();
  console.log();
  console.log();

  const diagon = await Diagon.init();
  let eqn = equation.equation;
  let steps = [...equation.steps];
  Object.entries(names).forEach((n) => {
    eqn = eqn.replaceAll(n[0], n[1].replaceAll(" ", "·"));
    steps = steps.map((step) =>
      step.replaceAll(n[0], n[1].replaceAll(" ", "·")),
    );
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
      .math(
        withVals +
          "=" +
          evaluate(equation.equation, problem.vals) +
          (units[problem.find] || ""),
        {
          style: "Unicode",
        },
      )
      .replace(/([^\s])·([^\s])/g, "$1 $2"),
  );
}
