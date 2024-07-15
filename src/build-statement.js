import { units } from "./data.js";
import { names } from "./equations.js";
import { getRandomInt } from "./util.js";
import { analogies } from "./writers.js";

export function buildStatement({ find, given }) {
  let q = analogies.find((fn) => fn({ find, given }));
  if (q) return q({ find, given });

  const vals = { Na: "602200000000000000000000" };
  for (const k of given) vals[k] = getRandomInt(1, 15);
  return {
    str: `Find the ${names[find] || find}, if ${given
      .map(
        (item, i) =>
          `${i === given.length - 1 && given.length > 1 ? "and " : ""}${names[item] || item} is ${vals[item]}${units[item] || ""}`,
      )
      .join(", ")}\n${process.argv[2] ? JSON.stringify({ find, given }) : ""}`,
    vals,
  };
}
