import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { solicitud } from 'src/app/modelos/solicitud.model';

@Component({
  selector: 'app-proceso-form',
  templateUrl: './proceso-form.component.html',
  styleUrls: ['./proceso-form.component.css']
})
export class ProcesoFormComponent implements OnInit {

  @Input() solicitudProceso!: solicitud;

  constructor() { }

  ngOnInit() : void{
  }
}