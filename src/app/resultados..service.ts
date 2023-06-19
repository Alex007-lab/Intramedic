import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { citasEspecial, citasLab, citasMGral } from "./models/Citas";
import { AuthService } from "./autentication.service";
import { ResultadosMedic } from "./models/Resultados";

@Injectable({
  providedIn: 'root'
})
export class ResultadosService{
  Resultados:ResultadosMedic[]=[
    new ResultadosMedic("Bryan",57,"Tipo de sangre: O+",10,"abril",2023,"Fernando Carrillo","Estable")
  ];


  constructor(private Autenticacion:AuthService){}

 IngresarResult(result:ResultadosMedic){
  this.Resultados.push(result);
  alert("Resultado ingresado Con Exito")
 }

}
