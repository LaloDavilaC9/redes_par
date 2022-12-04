import { Alumno } from "./alumno.model";
import { Materia } from "./materia.model";
import { Tutor } from "./tutor.model";

export class solicitud{
    ID : number = 0;
    alumnoAsesorado : Alumno = new Alumno;
    tutorAsesorias : Tutor = new Tutor;
    fechaPeticion : string = "";
    urgencia : boolean = false;
    materiaAsociada : Materia = new Materia;
    tema : string = "";
    descripcion : string = "";
    fechaAsesoria : string = "";
    sitio : string = "";
    modalidad : string = "";
    tutoresNoDisponibles : Tutor[] = [];
}