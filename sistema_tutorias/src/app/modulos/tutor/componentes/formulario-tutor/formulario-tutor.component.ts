import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Materia } from 'src/app/modelos/materia.model';
import { Respuesta } from 'src/app/modelos/respuesta.model';
import { TutorSimplificado } from 'src/app/modelos/tutor-simplificado.model';
import { Tutor } from 'src/app/modelos/tutor.model';
import { AutentificacionService } from 'src/app/modulos/autentificacion/servicios/autentificacion.service';
import { ServicioApiService } from 'src/app/servicios/servicio-api.service';

@Component({
  selector: 'app-formulario-tutor',
  templateUrl: './formulario-tutor.component.html',
  styleUrls: ['./formulario-tutor.component.css']
})
export class FormularioTutorComponent implements OnInit {

  formMateria!: FormGroup;
  materias: Materia[] = []
  materias_tutor : number[]= []
  tutorRegistro: TutorSimplificado = new TutorSimplificado()
  tutores: Tutor[] = []

  constructor(private servicio: ServicioApiService, private authservicio: AutentificacionService, private router: Router) {
    this.formMateria = new FormGroup({
      'materia': new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    //Obtener todas las materias del semestre
    this.servicio.getJSON('materia/obtenerTodas').subscribe((res: any)=>{
      this.materias = res as Materia[];
      this.materias = this.materias.filter(mat => mat.semestre < this.authservicio.alumnoActual.semestre)
    });
    //Obtener todas los tutores y sumarle al último id 1.
    this.servicio.getJSON('tutor/obtenerTodos').subscribe((res: any)=>{
      this.tutores = res as Tutor[];
      this.tutorRegistro.id= this.tutores.length + 1
    });
  }

  //Método para filtrar las materias a mostrar
  mostrarMateria(materia: Materia): boolean{
    if(materia.semestre < this.authservicio.alumnoActual.semestre){
      return true
    }
    else{
      return false
    }

  }

  //Método para agregar las materias del tutor
  agregarMateria(): void{
    this.materias_tutor.push(this.formMateria.get('materia')?.value);
    this.materias_tutor = this.materias_tutor.filter((item,index)=>{
      return this.materias_tutor.indexOf(item) === index;
    })
  }

  //Función para obtener los datos del futuro tutor
  obtenerDatosTutor(){

    this.tutorRegistro.idalumnoAsesorias = this.authservicio.idAlumno
    this.tutorRegistro.idsMateriasAsesorias = this.materias_tutor
  }

  //Función para dar de alto un tutor
  registrarTutor(): void {
    this.obtenerDatosTutor();

    //Efectuar api post para registar alumno
    this.servicio.registrar('tutor/agregar', this.tutorRegistro).subscribe((res: any) => {
      const respuesta: Respuesta = res as Respuesta
      console.log(respuesta.estado + " " + respuesta.mensaje)
      if(respuesta.estado == false){//De no ser exitoso regresa a alumno
        this.router.navigate(['alumno']);
      }
    });

    //Agregar el tuto en la info del servicio de autentificación
    this.authservicio.idTutor = this.tutorRegistro.id
    //Buscar el id del tutor en tutores
    this.servicio.getJSON('tutor/obtener/' + this.tutorRegistro.id).subscribe((res: any)=>{
      this.authservicio.tutorActual = res as Tutor;
    });
    this.router.navigate(['tutor']);
  }

}
