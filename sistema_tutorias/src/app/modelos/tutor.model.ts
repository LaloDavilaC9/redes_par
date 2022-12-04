import { Alumno } from "./alumno.model";
import { Materia } from "./materia.model";

export interface Tutor {
  ID: number;
  alumnoAsesorias: Alumno;
  materiasAsesorias: Materia[];
}
