import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/autentication.service';

@Component({
  selector: 'app-sesion-iniciada-paciente',
  templateUrl: './sesion-iniciada-paciente.component.html',
  styleUrls: ['./sesion-iniciada-paciente.component.css'],
})
export class SesionIniciadaPacienteComponent implements OnInit {
  paciente:any;
  selectedComponent: string;
  citasVisibility: boolean = false;
  LaboratorioVisibility: boolean = false;
  QuejasVisibility: boolean = false;
  PagoVisibility: boolean = false;

  constructor(private ServicioMedico:AuthService){}

  onChange(evento: any) {
    this.selectedComponent = evento.target.value;
  }

  Citas() {
    this.citasVisibility = !this.citasVisibility;
  }
  Laboratorio() {
    this.LaboratorioVisibility = !this.LaboratorioVisibility;
  }
  Quejas() {
    this.QuejasVisibility = !this.QuejasVisibility;
  }
  Pago() {
    this.PagoVisibility = !this.PagoVisibility;
  }



  ngOnInit(): void {
    this.paciente = this.ServicioMedico.getUsuarioPacient();
  }
}
