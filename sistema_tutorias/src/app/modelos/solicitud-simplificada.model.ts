export class solicitudSimplificada {
    id : number = 0;
    alumnoAsesorado : number = 0;
    tutorAsesorias : number = 0;
    fechaPeticion : string = "";
    urgencia : boolean = true;
    materiaAsesoria : number = 0;
    tema : string = "";
    descripcion : string = "";
    fechaAsesoria : string = "";
    sitio : string = "";
    modalidad : string = "";
    tutoresNoDisponibles : number[] = [];
}