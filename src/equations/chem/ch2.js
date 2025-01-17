import { eq, eqsInTermsOf, namesInTermsOf } from "../../util.js";

export const chemCh2Equations = [
  ...eqsInTermsOf(
    ["a", "b", "solute", "solvent"],
    "{}_mass_one_atom = {}_mass_number",
    "{}_mass_number = {}_number_protons + {}_number_neutrons",
    "{}_atomic_number = {}_number_protons",
    "{}_atomic_number = {}_number_electrons",
  ),

  ...eqsInTermsOf(
    ["a", "b"],
    "{}_energy = planck_constant * {}_frequency",
    "{}_frequency = speed_of_light / {}_wavelength",
    "{}_wavelength = {}_wave_velocity / {}_frequency",
    "{}_time_period = 1 / {}_frequency",
    "{}_wave_number = 1 / {}_wavelength",
  ),

  "wave_number_hydrogen = 109677 * ((1 / one_n **2) - (1 / two_n ** 2))",

  "transition_spectrum = (two_energy - one_energy) / planck_constant",
  "two_energy - one_energy = rydberg_constant * ((1 / one_n ** 2) - (1 / two_n ** 2))",

  ...eqsInTermsOf(
    ["p", "q", "one_electron"],
    "ME * {}_electron_velocity * {}_orbit_radius = {}_n * (planck_constant / (2 * PI))",
    "{}_electron_energy = -rydberg_constant * (1 / n ** 2)",
    "{}_orbit_radius = {}_n * 52.9",
    "{}_electron_wavelength = planck_constant / {}_electron_mass * {}_electron_velocity",
    "{}_electron_kinetic_energy = ({}_electron_mass * ({}_electron_velocity ** 2)) / 2",
    "{}_electron_momentum = {}_electron_mass * {}_electron_velocity",
    "({}_electron_velocity_uncertainty) * ({}_electron_momentum_uncertainty) = planck_constant / (4 * PI * {}_electron_mass)", // TODO: maybe expand
  ),

  ...eqsInTermsOf(
    ["p", "q"],
    "{}_n_number_orbitals = {}_n ** 2",
    "{}_n_number_electrons = 2 * {}_n_number_orbitals",
    "{}_n_total_nodes = {}_n - 1",
    "{}_n_total_nodes = {}_n_angular_nodes + {}_n_radial_nodes",
    "{}_n_angular_nodes = {}_l",
    "{}_n_radial_nodes = {}_n - {}_l - 1",
    "{}_n_orbital_energy = {}_n + {}_l",
  ),

  "one_electron_ion_energy = -rydberg_constant * ((one_electron_atomic_number ** 2) / (one_electron_n ** 2))",
  "one_electron_ion_orbit = 52.9 * (one_electron_n ** 2) / one_electron_atomic_number",
].map(eq);

export const chemCh2Names = Object.assign(
  namesInTermsOf(["a", "b", "solute", "solvent"], {
    mass_one_atom: "mass of one atom{ of $}",
    mass_number: "mass number{ of $}",
    atomic_number: "atomic number{ of $}",
    number_protons: "number of protons{ in $}",
    number_neutrons: "number of neutrons{ in $}",
  }),
  namesInTermsOf(["a", "b"], {
    energy: "energy of electron{ $}",
    frequency: "frequency of electron{ $}",
    wavelength: "wavelength of electron{ $}",
    time_period: "time period of electron{ $}",
    wave_number: "wave number of electron{ $}",
  }),
  namesInTermsOf(["p", "q"], {
    n: "principal atomic number of orbital{ $}",
    l: "azimuthal atomic number of orbital{ $}",
    n_number_orbitals: "number of orbitals in shell{ $}",
    n_number_electrons: "number of electrons in shell{ $}",
    n_total_nodes: "total number of nodes{ in $}",
    n_angular_nodes: "number of angular nodes{ in $}",
    n_radial_nodes: "number of radial nodes{ in $} ",
    n_orbital_energy: "energy of orbital{ in $}",
  }),
  namesInTermsOf(["p", "q"], {
    electron_velocity: "velocity of electron{ $}",
    orbit_radius: "radius of orbit{ of electron $}",
    electron_wavelength: "wavelength of electron{ $}",
    electron_energy: "energy of electron{ $}",
    electron_kinetic_energy: "kinetic energy of electron{ $}",
    electron_momentum: "momentum of electron{ $}",
    electron_mass: "mass of electron{ $}",
    electron_velocity_uncertainty: "uncertainty in velocity of electron{ $}",
    electron_momentum_uncertainty: "uncertainty in momentum of electron{ $}",
  }),
  {
    wave_number_hydrogen: "wave number of hydrogen atom",
    transition_spectrum: "transition spectrum of atom",

    one_electron_velocity: "velocity of electron in single-electron atom",
    one_electron_orbit_radius:
      "radius of orbit of electron in single-electron atom",
    one_electron_electron_wavelength:
      "wavelength of electron in single-electron atom",
    one_electron_electron_energy: "energy of electron in single-electron atom",
    one_electron_electron_kinetic_energy:
      "kinetic energy of electron in single-electron atom",
    one_electron_electron_momentum:
      "momentum of electron in single-electron atom",
    one_electron_electron_mass: "mass of electron in single-electron atom",
    one_electron_electron_velocity_uncertainty:
      "uncertainty in velocity of electron in single-electron atom",
    one_electron_electron_momentum_uncertainty:
      "uncertainty in momentum of electron in single-electron atom",
    one_electron_ion_energy: "energy of atom with only one electron",
    one_electron_ion_orbit: "orbit of electron in single-electron atom",
    one_electron_atomic_number: "atomic number of single-electron atom",
  },
);
