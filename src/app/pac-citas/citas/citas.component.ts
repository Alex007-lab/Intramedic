import { Component, Input } from '@angular/core';
import { citaService } from 'src/app/cita.service';
import { citasEspecial, citasLab, citasMGral } from 'src/app/models/Citas';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-citasl',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
})
export class CitasComponentL {
  @Input() opcionSeleccionada2: string;
  @Input() citaL: citasLab;
  @Input() citaE: citasEspecial;
  @Input() citaG: citasMGral;
  @Input() Indice: number;
  @Input() paciente: User;
  @Input() Hora: string;
  @Input() Dia: number = 0;
  @Input() mes: string = '';
  @Input() año: number = 0;
  @Input() estudio: string;
  @Input() Comment: string;
  @Input() especialidad: string;
  @Input() doctor: string;
  constructor(private ServicioCita: citaService) {}

  ModificarCitaL() {}



}
