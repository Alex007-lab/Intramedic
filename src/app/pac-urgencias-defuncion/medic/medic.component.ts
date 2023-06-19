import { Component } from '@angular/core';
import { AuthService } from 'src/app/autentication.service';
import { citaService } from 'src/app/cita.service';
import { citasEspecial, citasLab, citasMGral } from 'src/app/models/Citas';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-medic-defuncion',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.css']
})
export class MedicComponent {
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
  onChange(event: any) {
    this.opcionSeleccionada = event.target.value;
  }

  CrearCita() {
    const partesFecha = this.fechaSeleccionada.split('-');
    this.Dia = Number(partesFecha[2]);
    this.mes = partesFecha[1];
    this.año = Number(partesFecha[0]);
    switch (this.opcionSeleccionada2) {
      case 'laboratorio':
        var CitaL = new citasLab(
          this.AutenticacionS.getUsuarioMedic(),
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
          this.AutenticacionS.getUsuarioMedic(),
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
