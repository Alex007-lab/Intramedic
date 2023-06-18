import { Component } from '@angular/core';

@Component({
  selector: 'app-sesion-iniciada-paciente',
  templateUrl: './sesion-iniciada-paciente.component.html',
  styleUrls: ['./sesion-iniciada-paciente.component.css']
})
export class SesionIniciadaPacienteComponent {

  selectedComponent: string;

  onChange(evento: any) {
    this.selectedComponent = evento.target.value;
  }


}
