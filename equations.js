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
    equation: "n_molecules = volume * Na / 22.4",
    variables: ["n_molecules", "volume"],
  },
  {
    equation: "n_molecules = mole_molecules * Na",
    variables: ["n_molecules", "mole_molecules"],
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
    equation: "mole_molecules = weight / mass_molecules",
    variables: ["mole_molecules", "weight", "mass_molecules"],
  },
  {
    equation: "mass_one_atom = mass_atoms / Na",
    variables: ["mass_one_atom", "mass_atoms"],
  },
  {
    equation: "mass_one_molecule = mass_molecules / Na",
    variables: ["mass_one_molecule", "mass_molecules"],
  },
];

export const names = {
  n_molecules: "number of molecules",
  mass_molecules: "molecular mass",
  mole_molecules: "number of mole molecules",
  n_atoms: "number of atoms",
  mass_atoms: "atomic mass",
  mole_atoms: "number of mole atoms",
  mole_molecules_solute: "number of moles of solute",
  mole_molecules_solvent: "number of moles of solvent",
};
