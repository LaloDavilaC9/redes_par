export interface solicitudSimplificada {
  ID: number;
  alumnoAsesorado: number;
  tutorAsesorias: number;
  fechaPeticion: string;
  urgencia: boolean;
  materiaAsociada: number;
  tema: string;
  descripcion: string;
  fechaAsesoria: string;
  sitio: string;
  modalidad: string;
  tutoresNoDisponibles: number[];
}
