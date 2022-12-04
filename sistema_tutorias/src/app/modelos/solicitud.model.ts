import { Alumno } from "./alumno.model";
import { Materia } from "./materia.model";
import { Tutor } from "./tutor.model";

export interface solicitud{
    ID : number;
    alumnoAsesorado : Alumno;
    tutorAsesorias : Tutor;
    fechaPeticion : string;
    urgencia : boolean;
    materiaAsociada : Materia;
    tema : string;
    descripcion : string;
    fechaAsesoria : string;
    sitio : string;
    modalidad : string;
    tutoresNoDisponibles : Tutor[];
}