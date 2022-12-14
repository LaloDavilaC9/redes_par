import { Component, Input, OnInit } from '@angular/core';
import { solicitud } from 'src/app/modelos/solicitud.model';

@Component({
  selector: 'app-proximas-form',
  templateUrl: './proximas-form.component.html',
  styleUrls: ['./proximas-form.component.css']
})
export class ProximasFormComponent implements OnInit {

  @Input() solicitudProxima: solicitud = new solicitud();

  constructor() { }

  ngOnInit(): void {
  }

}
