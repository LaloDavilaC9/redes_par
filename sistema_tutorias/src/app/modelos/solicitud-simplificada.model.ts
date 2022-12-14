export interface solicitudSimplificada {
  id: number;
  alumnoAsesorado: number;
  tutorAsesorias: number;
  fechaPeticion: string;
  urgencia: boolean;
  materiaAsesoria: number;
  tema: string;
  descripcion: string;
  fechaAsesoria: string;
  sitio: string;
  modalidad: string;
  tutoresNoDisponibles: number[];
}