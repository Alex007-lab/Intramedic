import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/autentication.service';
import { Admin, Medic, User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent {
  activeTab: 'login' | 'register' = 'login';
  Redirect: boolean = false;
  loginEmail: string;
  loginPassword: string;
  selectedComponent: string;
  Administrador: Admin;
  Doctor: Medic;
  paciente: User;

  constructor(private Autenticacion: AuthService,private router: Router) {}

  switchTab(tab: 'login' | 'register') {
    this.activeTab = tab;
  }

  onChange(evento: any) {
    this.selectedComponent = evento.target.value;
  }

  onLoginSubmitAdmin() {
    if (
      this.Autenticacion.LoginAdmin(this.loginEmail, this.loginPassword) != null
    ) {
      alert('Se ha iniciado sesión con exito');
      this.router.navigate(['./DashAdmin'])
    } else {
      alert('No existe el usuario o contraseña incorrecta');
    }
  }

  onLoginSubmitMedic() {
    if (
      this.Autenticacion.LoginMedic(this.loginEmail, this.loginPassword) != null
    ) {
      alert('Se ha iniciado sesión con exito');
      this.Redirect = true;
    } else {
      alert('No existe el usuario o contraseña incorrecta');
    }
  }

  onLoginSubmitPatient() {
    if (
      this.Autenticacion.LoginAdmin(this.loginEmail, this.loginPassword) != null
    ) {
      alert('Se ha iniciado sesión con exito');
      this.Redirect = true;
    } else {
      alert('No existe el usuario o contraseña incorrecta');
    }
  }
}
