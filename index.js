import { equations } from "./src/equations.js";
import { buildProblem } from "./src/build-problem.js";
import { buildStatement } from "./src/build-statement.js";
import { render } from "./src/render.js";

const equation = buildProblem(
  // equations[Math.floor(Math.random() * equations.length)],
  equations[3],
);
const problem = buildStatement(equation);

await render(equation, problem);
