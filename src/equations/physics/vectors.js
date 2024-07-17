import { eq } from "../../util.js";

export const vectorsEquations = [
  "vector_a = ax*i + ay*j + az*k",
  "magnitude_a = (ax*i)**2 + (ay*j)**2 + (az*k)**2",
  "vector_b = bx*i + by*j + bz*k",
  "magnitude_b = (bx*i)**2 + (by*j)**2 + (bz*k)**2",

  "a_dot_b = ax*bx + ay*by + az*bz",
  "a_dot_b = magnitude_a * magnitude_b * cos(angle_a_b)",
  "a_cross_b = (ay * bz - az * by)i + (az * bx - ax * bz)j + (ax*by - ay*bx)k",
  "magnitude_a_cross_b = magnitude_a * magnitude_b * sin(angle_a_b)",
  "magnitude_a_cross_b = ((ay * bz - az * by)i)**2 + ((az * bx - ax * bz)j)**2 + ((ax*by - ay*bx)k)**2",
].map(eq);

export const vectorsNames = {
  i: "unit vector in the x-direction",
  j: "unit vector in the y-direction",
  k: "unit vector in the z-direction",

  vector_a: "vector a",
  vector_b: "vector b",

  magnitude_a: "magnitude of vector a",
  magnitude_b: "magnitude of vector b",

  angle_a_b: "angle between vector a and b",

  a_dot_b: "dot product of vectors a and b",
  a_cross_b: "cross product of vectors a and b",

  magnitude_a_cross_b: "magnitude of the cross product of vectors a and b",
};
