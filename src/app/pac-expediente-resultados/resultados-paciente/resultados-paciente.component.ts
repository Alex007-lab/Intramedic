import { Component } from '@angular/core';
import { ResultadosService } from 'src/app/resultados..service';

@Component({
  selector: 'app-resultados-paciente',
  templateUrl: './resultados-paciente.component.html',
  styleUrls: ['./resultados-paciente.component.css']
})
export class ResultadosPacienteComponent {

  constructor(private ResultadosServicio:ResultadosService){}

  
}
