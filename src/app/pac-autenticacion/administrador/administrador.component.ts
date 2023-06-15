import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/autentication.service';
import { Admin, User } from 'src/app/models/User';
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
})
export class AdministradorComponent {

  Administrador:Admin;
  registerNombre: string ;
  registerApellidoP: string ;
  registerApellidoM: string ;
  registerEmail: string ;
  registerPassword: string ;
  Id:number = 0;
  Rol: string;
  AreaODepartamento: string;

  constructor(private Autenticacion:AuthService,private router: Router){}


  Registrarse(){
    this.Id = this.Id + 1;
    this.Administrador = new Admin(this.Id,this.registerNombre,this.registerApellidoP,this.registerApellidoM,this.registerEmail,this.registerPassword,this.Rol,this.AreaODepartamento);
    this.Autenticacion.RegistrarAdmin(this.Administrador);
    alert(`El usuario ${this.registerNombre} se ha registrado con exito!`);
    this.router.navigate(['./Home'])
  }



}
