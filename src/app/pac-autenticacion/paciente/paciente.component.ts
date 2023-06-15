import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/autentication.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
  registerNombre: string ;
  registerApellidoP: string ;
  registerApellidoM: string ;
  registerEmail: string;
  registerPassword: string;
  Id:number;
  paciente:User;
  constructor(private ServicioPaciente:AuthService,private router: Router){}

  Registrarse(){
    this.Id = this.Id + 1;
    this.paciente = new User(this.Id,this.registerNombre,this.registerApellidoP,this.registerApellidoM,this.registerEmail,this.registerPassword)
    this.ServicioPaciente.RegistrarPaciente(this.paciente);
    alert(`El usuario ${this.registerNombre} se ha registrado con exito!`);
    this.router.navigate(['./Home'])
  }
}
