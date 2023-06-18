import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { citasEspecial, citasLab, citasMGral } from "./models/Citas";
import { AuthService } from "./autentication.service";

@Injectable({
  providedIn: 'root'
})
export class citaService{
  CitaEspecialidad:citasEspecial[]=[];
  Citalaboratorio:citasLab[]=[
    new citasLab(this.Autenticacion.PacienteEncontrado,"10:45",12,"abril",2023,"Electrocardiograma","Alberto"),
    new citasLab(this.Autenticacion.PacienteEncontrado,"10:45",12,"abril",2023,"Electrocardiograma","Alberto"),
    new citasLab(this.Autenticacion.PacienteEncontrado,"10:45",12,"abril",2023,"Electrocardiograma","Alberto"),
    new citasLab(this.Autenticacion.PacienteEncontrado,"10:45",12,"abril",2023,"Electrocardiograma","Alberto")
  ];
  CitaGral:citasMGral[]=[];

  constructor(private Autenticacion:AuthService){}

 IngresarLab(CitaL:citasLab){
  this.Citalaboratorio.push(CitaL);
  alert("Cita Creada Con Exito")
 }

 IngresarEsp(CitaE:citasEspecial){
  this.CitaEspecialidad.push(CitaE);
  alert("Cita Creada Con Exito")
 }

 IngresarGral(CitaG:citasMGral){
  this.CitaGral.push(CitaG);
  alert("Cita Creada Con Exito")
 }


}
