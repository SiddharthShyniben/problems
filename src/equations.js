export const equations = [
  {
    equation: "molality = mole_molecules_solute / mole_molecules_solvent",
    variables: ["molality", "mole_molecules_solute", "mole_molecules_solvent"],
  },
  {
    equation: "n_moles = vol / 22.4",
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
    equation: "atoms_per_molecule = n_atoms / n_molecules",
    variables: ["atoms_per_molecule", "n_atoms", "n_molecules"],
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
  {
    equation: "Xa + Xb = 1",
    variables: ["Xa", "Xb"],
  },
  {
    equation: "Xa = moles_a / (moles_a + moles_b)",
    variables: ["Xa", "moles_a", "moles_b"],
  },
  {
    equation: "Xb = moles_b / (moles_a + moles_b)",
    variables: ["Xb", "moles_a", "moles_b"],
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
  moles_molecules: "amount of molecules",
  mass_one_molecule: "mass of one molecule",
  n_atoms: "number of atoms",
  mass_atoms: "mass of one mole atoms",
  mole_atoms: "amount of atoms",
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
