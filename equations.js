import color from "@nuff-said/color";

export const massTable = [
  ["hydrogen", 2],
  ["helium", 4],
  ["lithium", 7],
  ["beryllium", 13],
  ["boron", 11],
  ["carbon", 12],
  ["nitrogen", 14],
  ["oxygen", 16],
  ["fluorine", 19],
  ["neon", 20],
  ["sodium", 23],
];

export const equations = [
  {
    equation: "n_molecules = (weight * Na) / mass_molecules",
    variables: ["n_molecules", "weight", "mass_molecules"],
  },
  {
    equation: "n_atoms = (weight * Na) / mass_atoms",
    variables: ["n_atoms", "weight", "mass_atoms"],
  },
  {
    equation: "molality = mole_molecules_solute / mole_molecules_solvent",
    variables: ["molality", "mole_molecules_solute", "mole_molecules_solvent"],
  },
  {
    equation: "n_molecules = vol * Na / 22.4",
    variables: ["n_molecules", "vol"],
  },
  {
    equation: "n_molecules = moles_molecules * Na",
    variables: ["n_molecules", "moles_molecules"],
  },
  {
    equation: "n_atoms = mole_atoms * Na",
    variables: ["n_atoms", "mole_atoms"],
  },
  {
    equation: "n_atoms = n_molecules * atoms_per_molecule",
    variables: ["n_atoms", "n_molecules", "atoms_per_molecule"],
  },
  {
    equation: "mole_atoms = weight / mass_atoms",
    variables: ["mole_atoms", "weight", "mass_atoms"],
  },
  {
    equation: "moles_molecules = weight / mass_molecules",
    variables: ["moles_molecules", "weight", "mass_molecules"],
  },
  {
    equation: "mass_one_atom = mass_atoms / Na",
    variables: ["mass_one_atom", "mass_atoms"],
  },
  {
    equation: "mass_one_molecule = mass_molecules / Na",
    variables: ["mass_one_molecule", "mass_molecules"],
  },
  {
    equations: "temp_kelvin = temp_celsius + 273.15",
    variables: ["temp_kelvin", "temp_celsius"],
  },
  {
    equation: "temp_fahrenheit = (9 * temp_celsius / 5) + 32",
    variables: ["temp_fahrenheit", "temp_celsius"],
  },
  {
    equation: "mass_percent = mass_solute * 100 / mass_solvent",
    variables: ["mass_percent", "mass_solute", "mass_solvent"],
  },
  { equation: "Xa + Xb = 1", variables: ["Xa", "Xb"] },
  {
    equation: "Xa = moles_a / (moles_a + moles_b)",
    variables: ["Xa", "moles_a", "moles_b"],
  },
  {
    equation: "Xb = moles_b / (moles_a + moles_b)",
    variables: ["Xb", "moles_a", "moles_b"], // TODO: expand
  },
  {
    equation: "molarity = mole_molecules_solute / volume_solvent",
    variables: ["molarity", "mole_molecules_solute", "volume_solvent"],
  },
  {
    equation: "mass_molecules = 2 * vapor_density",
    variables: ["mass_molecules", "vapor_density"],
  },
];

export const names = {
  n_molecules: "number of molecules",
  mass_molecules: "mass of one mole molecules",
  moles_molecules: "number of mole molecules",
  mass_one_molecule: "mass of one molecule",
  n_atoms: "number of atoms",
  mass_atoms: "mass of one mole atoms",
  mole_atoms: "number of mole atoms",
  mass_one_atom: "mass of one atom",
  mole_molecules_solute: "number of moles of solute",
  mole_molecules_solvent: "number of moles of solvent",
  atoms_per_molecule: "number of atoms per molecule",
  temp_celsius: "temperature in celsius",
  temp_kelvin: "temperature in kelvin",
  temp_fahrenheit: "temperature in fahrenheit",
  vol: "volume in liters",
  mass_percent: "mass %",
  mass_solute: "mass of solute",
  mass_solvent: "mass of solvent",
  Xa: "mole fraction of A",
  Xb: "mole fraction of B",
  moles_a: "number of moles of A",
  moles_b: "number of moles of B",
  volume_solvent: "volume of solvent",
  vapor_density: "vapor density",
};

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

const hasSameElements = (arr1, arr2) =>
  arr1.length == arr2.length && arr2.every((item) => arr1.includes(item));

export const analogies = [
  ({ find, given }) => {
    if (
      find == "mass_molecules" &&
      hasSameElements(given, ["n_molecules", "n_atoms", "mass_atoms"])
    ) {
      const x = getRandomInt(1, 100);
      const y = x * getRandomInt(1, 50);
      const z = getRandomInt(1, 50);
      return {
        vals: {
          mass_atoms: z,
          n_atoms: y,
          n_molecules: z,
        },
        str:
          Math.random() > 0.5
            ? `A container filled with some substance is found to have ${x}Na molecules and ${y}Na atoms. If the mass of one mole atoms of the substance is ${z}g, find the mass of one mole molecules of the substance`
            : `One student measures the number of atoms in a given measure of a subtance to be ${y}Na. Another student finds the number of molecules in the substance to be ${x}Na. If the gram atomic mass of the subtance is ${z}g, find the gram molecular mass of the substance`,
      };
    }
  },
  ({ find, given }) => {
    if (
      find == "molality" &&
      hasSameElements(given, [
        "mole_molecules_solvent",
        "mole_molecules_solute",
      ])
    ) {
      const x = getRandomInt(1, 100);
      const y = getRandomInt(1, 50) + getRandomInt(1, x);
      return {
        vals: {
          mole_molecules_solute: x,
          mole_molecules_solvent: y,
        },
        str:
          Math.random() > 0.5
            ? `A given solution is prepared by mixing ${x}mol solute in ${y}mol solvent. Find it's molality`
            : `${x}mol of a sugar like compound is mixed in ${y}mol water. Find it's molality`,
      };
    }
  },
  ({ find, given }) => {
    if (
      find == "mole_atoms" &&
      hasSameElements(given, ["weight", "mass_atoms"])
    ) {
      const el = massTable[Math.floor(Math.random() * massTable.length)];
      const x = (getRandomInt(1, 1000) * el[1]) / 10;

      return {
        vals: {
          weight: x,
          mass_atoms: el[1],
        },
        str:
          Math.random() > 0.5
            ? `A sample of ${el[0]} weighs ${x}g. Find the number of mole atoms in it`
            : `A sample of a substance whose atomic mass is ${el[1]} weights ${x}g. Find the amount of atoms in mol`,
      };
    }
  },
  ({ find, given }) => {
    if (find == "n_atoms" && hasSameElements(given, ["weight", "mass_atoms"])) {
      const el = massTable[Math.floor(Math.random() * massTable.length)];
      const x = (getRandomInt(1, 1000) * el[1]) / 10;
      const y = el[1];

      return {
        vals: {
          weight: x,
          mass_atoms: y,
          Na: 602200000000000000000000,
        },
        str:
          Math.random() > 0.5
            ? `A sample of a mineral weighs ${x}g. If the molar mass of this mineral is ${y} grams per mole, how many mineral atoms are in the sample?`
            : `Find the number of atoms in an ${x}g vial of ${el[0]}`,
      };
    }
  },
  ({ find, given }) => {
    if (
      find == "mass_one_molecule" &&
      hasSameElements(given, ["weight", "n_molecules"])
    ) {
      const el = massTable[Math.floor(Math.random() * massTable.length)];
      const y = getRandomInt(1, 100);
      const x = (y * getRandomInt(1, 1000) * el[1]) / 10;

      return {
        vals: {
          weight: x,
          n_molecules: y,
        },
        str: `If ${x}g of a substance has ${y} molecules, find the mass of one molecule of the substance`,
      };
    }
  },
  ({ find, given }) => {
    if (
      find == "n_molecules" &&
      hasSameElements(given, [
        "n_atoms",
        "mass_atoms",
        "moles_molecules",
        "weight",
      ])
    ) {
    }
  },
];

// const els = [
//   ["oxygen", 2],
//   ["hydrogen", 2],
//   ["nitrogen", 2],
//   ["fluorine", 2],
//   ["iodine", 2],
//   ["chlorine", 2],
//   ["bromine", 2],
//   ["sulfur", 8],
//   ["potassium", 5],
// ];
//
// TODO: A concentrated solution with a high molality (let's say 10 mol/kg) is available. How much solvent (in kg) needs to be added to 2 moles of the solution to create a new solution with a final molality of 3 mol/kg?
// TODO eval each step
// TODO units
// TODO find path of least resistance when solving
