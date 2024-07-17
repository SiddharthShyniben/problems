import { chemCh1Equations, chemCh1Names } from "./equations/chem/ch1.js";
import { chemCh2Equations, chemCh2Names } from "./equations/chem/ch2.js";

export const equations = [...chemCh1Equations, ...chemCh2Equations];
export const names = { ...chemCh1Names, ...chemCh2Names };
