import { Component, Input } from '@angular/core';
import { citaService } from 'src/app/cita.service';
import { citasEspecial } from 'src/app/models/Citas';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-citas-e',
  templateUrl: './citas-e.component.html',
  styleUrls: ['./citas-e.component.css']
})
export class CitasEComponent {
  @Input() citaE: citasEspecial;
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
}
