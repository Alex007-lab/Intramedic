import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchAll } from 'rxjs';
import { AuthService } from 'src/app/autentication.service';
import { citaService } from 'src/app/cita.service';
import { citasEspecial, citasLab, citasMGral } from 'src/app/models/Citas';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-paciente-citas',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponentCitas implements OnInit {
  opcionSeleccionada: string = '';
  opcionSeleccionada2: string = '';
  fechaSeleccionada: string = '';
  paciente: User;
  Hora: string;
  Dia: number = 0;
  mes: string = '';
  año: number = 0;
  estudio: string;
  Comment: string;
  especialidad: string;
  doctor: string;
  citaLab:citasLab[];
  citaE:citasEspecial[];
  citaG:citasMGral[];


  constructor(
    private AutenticacionS: AuthService,
    private ServicioCita: citaService
  ) {}


  ngOnInit(): void {
    this.citaE = this.ServicioCita.CitaEspecialidad;
    this.citaG = this.ServicioCita.CitaGral;
    this.citaLab = this.ServicioCita.Citalaboratorio;
  }

  onChange(event: any) {
    this.opcionSeleccionada = event.target.value;
  }

  onChange2(event: any) {
    this.opcionSeleccionada2 = event.target.value;
    console.log(this.opcionSeleccionada2);
  }

  CrearCita() {
    const partesFecha = this.fechaSeleccionada.split('-');
    this.Dia = Number(partesFecha[2]);
    this.mes = partesFecha[1];
    this.año = Number(partesFecha[0]);
    switch (this.opcionSeleccionada2) {
      case 'laboratorio':
        var CitaL = new citasLab(
          this.AutenticacionS.getUsuarioPacient(),
          this.Hora,
          this.Dia,
          this.mes,
          this.año,
          this.estudio,
          this.doctor
        );
        this.ServicioCita.IngresarLab(CitaL);
        console.log(CitaL);
        break;

      case 'medico-general':
        var CitaG = new citasMGral(
          this.AutenticacionS.getUsuarioPacient(),
          this.Hora,
          this.Dia,
          this.mes,
          this.año,
          this.Comment,
          this.doctor
        );
        this.ServicioCita.IngresarGral(CitaG);
        console.log(CitaG);
        break;

      case 'medico-especialista':
        var CitaE = new citasEspecial(
          this.AutenticacionS.getUsuarioPacient(),
          this.Hora,
          this.Dia,
          this.mes,
          this.año,
          this.especialidad,
          this.doctor
        );
        this.ServicioCita.IngresarEsp(CitaE);
        console.log(CitaE);
        break;

      default:
        alert('Elija un tipo de cita porfavor');
        break;
    }
  }


}
