import { Component, Input } from '@angular/core';
import { citasMGral } from 'src/app/models/Citas';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-citas-mg',
  templateUrl: './citas-mg.component.html',
  styleUrls: ['./citas-mg.component.css']
})
export class CitasMGComponent {
  @Input() citaG: citasMGral;
  @Input() paciente: User;
  @Input() Hora: string;
  @Input() Dia: number = 0;
  @Input() mes: string = '';
  @Input() año: number = 0;
  @Input() estudio: string;
  @Input() Comment: string;
  @Input() especialidad: string;
  @Input() doctor: string;
  @Input() Indice: number;
}
