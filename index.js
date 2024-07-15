import { equations } from "./src/equations.js";
import { buildProblem } from "./src/build-problem.js";
import { buildStatement } from "./src/build-statement.js";
import { render } from "./src/render.js";

console.log(process.argv[2]);
const equation = buildProblem(
  equations[+(process.argv[2] ?? Math.floor(Math.random() * equations.length))],
);
const problem = buildStatement(equation);

await render(equation, problem);
