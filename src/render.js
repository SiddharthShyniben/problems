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

  let runningScope = { ...problem.vals };

  if (steps.length > 2)
    for (const step of steps) {
      let [finding, withVals] = step.split(" = ");
      let oldWithVals = withVals,
        oldFinding = finding;

      for (const [k, v] of Object.entries(runningScope)) {
        withVals = withVals.replaceAll(
          (names[k] || k).replaceAll(" ", "·"),
          v.toString(),
        );

        finding = finding.replaceAll(
          (names[k] || k).replaceAll(" ", "·"),
          v.toString(),
        );
      }

      if (oldWithVals !== withVals) {
        if (finding !== oldFinding)
          console.log(
            diagon.translate
              .math(step + " = " + finding + " = " + withVals, {
                style: "Unicode",
              })
              .replace(/([^\s])·([^\s])/g, "$1 $2"),
          );
        else
          console.log(
            diagon.translate
              .math(step + " = " + withVals, { style: "Unicode" })
              .replace(/([^\s])·([^\s])/g, "$1 $2"),
          );
      } else if (finding !== oldFinding)
        console.log(
          diagon.translate
            .math(step + " = " + finding, { style: "Unicode" })
            .replace(/([^\s])·([^\s])/g, "$1 $2"),
        );
      else
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
