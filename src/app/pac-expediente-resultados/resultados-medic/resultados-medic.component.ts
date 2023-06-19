import { Component } from '@angular/core';
import { ResultadosMedic } from 'src/app/models/Resultados';
import { ResultadosService } from 'src/app/resultados..service';

@Component({
  selector: 'app-resultados-medic',
  templateUrl: './resultados-medic.component.html',
  styleUrls: ['./resultados-medic.component.css']
})
export class ResultadosMedicComponent {
  NombreP:string;
  edad:number;
  Resultado:string;
  doctor:string;
  Dia: number = 0;
  mes: string = '';
  año: number = 0;
  fechaSeleccionada: string = '';
  resultado:ResultadosMedic[];

  constructor(private ServicioResultados:ResultadosService){}

  IngresarResultado(){
    const partesFecha = this.fechaSeleccionada.split('-');
    this.Dia = Number(partesFecha[2]);
    this.mes = partesFecha[1];
    this.año = Number(partesFecha[0]);
    var resultado = new ResultadosMedic("Alexander",57,"Tipo de sangre: O+",10,"abril",2023,"Fernando Carrillo","Estable");
    this.ServicioResultados.IngresarResult(resultado)
    console.log(resultado)
    alert("Resultado Guardado")
  }
}
