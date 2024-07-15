import color from "@nuff-said/color";
export const colors = [
  color.red,
  color.green,
  color.yellow,
  color.blue,
  color.magenta,
  color.cyan,
  color.white,
];

export function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export const hasSameElements = (arr1, arr2) =>
  arr1.length == arr2.length && arr2.every((item) => arr1.includes(item));
