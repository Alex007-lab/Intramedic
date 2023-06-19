import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/autentication.service';

@Component({
  selector: 'app-sesion-iniciada-medico',
  templateUrl: './sesion-iniciada-medico.component.html',
  styleUrls: ['./sesion-iniciada-medico.component.css']
})
export class SesionIniciadaMedicoComponent implements OnInit{
  Medico:any;

  constructor(private ServicioMedico:AuthService){}


  ExpedienteVisibility: boolean = false;
  LaboratorioVisibility: boolean = false;
  RecetaVisibility: boolean = false;
  UrgenciaVisibility: boolean = false;
  citasVisibility: boolean = false;

  Cita() {
    this.citasVisibility = !this.citasVisibility;
  }
  Expediente() {
    this.ExpedienteVisibility = !this.ExpedienteVisibility;
  }
  Laboratorio() {
    this.LaboratorioVisibility = !this.LaboratorioVisibility;
  }
  Receta() {
    this.RecetaVisibility = !this.RecetaVisibility;
  }
  Urgencia() {
    this.UrgenciaVisibility = !this.UrgenciaVisibility;
  }


  ngOnInit(): void {
    this.Medico = this.ServicioMedico.getUsuarioMedic();
    console.log(this.Medico)
  }



}
