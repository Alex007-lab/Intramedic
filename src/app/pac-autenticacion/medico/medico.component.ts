import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/autentication.service';
import { Medic } from 'src/app/models/User';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent {
  registerNombre: string ;
  registerApellidoP: string ;
  registerApellidoM: string ;
  registerEmail: string ;
  registerPassword: string ;
  especialidad:string;
  cargo:string;
  numeroDeColegiado:number;
  horario:string;
  telefono:number
  Doctor:Medic
  Id:number;

  constructor(private ServicioMedico:AuthService,private router: Router){}

  Registrarse(){
    this.Id = this.Id + 1;
    this.Doctor = new Medic(this.Id,this.registerNombre,this.registerApellidoP,this.registerApellidoM,this.registerEmail,this.registerPassword,this.especialidad,this.cargo,this.numeroDeColegiado,this.horario,this.telefono)
    this.ServicioMedico.RegistrarMedic(this.Doctor);
    alert(`El usuario ${this.registerNombre} se ha registrado con exito!`);
    this.router.navigate(['./Home'])
  }
}
