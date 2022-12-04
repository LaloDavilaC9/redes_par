import { Alumno } from "./alumno.model";
import { Materia } from "./materia.model";
import { Tutor } from "./tutor.model";

export class solicitudSimplificada{
    ID : number = 0;
    alumnoAsesorado : number = 0;
    tutorAsesorias : number = 0;
    fechaPeticion : string = "";
    urgencia : boolean = false;
    materiaAsociada : number = 0;
    tema : string = "";
    descripcion : string = "";
    fechaAsesoria : string = "";
    sitio : string = "";
    modalidad : string = "";
    tutoresNoDisponibles : number[] = [];
}