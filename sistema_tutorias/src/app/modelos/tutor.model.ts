import { AlumnoModule } from "../modulos/alumno/alumno.module";
import { Alumno } from "./alumno.model";
import { Materia } from "./materia.model";

export class Tutor {
  ID: number = 0;
  alumnoAsesorias: Alumno = new Alumno;
  materiasAsesorias: Materia[] = [];
}
