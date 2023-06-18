import { EventEmitter, Injectable } from "@angular/core";
import { Admin, Medic, User } from "./models/User";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private  persona:User;
  public MedicEncontrado:any;
  


  PersonasAdmin:Admin[]=[
    new Admin(100,"Roberto","Martinez","Gonzales","Prueba@gmail.com","Muñeca","Servicio Social","Archivo")
  ];
  PersonasMedic:Medic[]=[
    new Medic(100,"Fernando","Moreno","Castillo","Doctor@gmail.com","Abrigo","Pediatria","Cirujano",2193076909,"Vespertino",5527211580)
  ];
  PersonasPaciente:User[]=[
    new User(100,"Pedro","Carrillo","Martinez","Paciente@gmai.com","AndoMalo")
  ];



  setUsuario(persona:User){
    this.persona = persona;
  }

  getUsuario(){
    return this.persona;
  }

  RegistrarAdmin(Administrador:Admin){
    this.PersonasAdmin.push(Administrador);
    console.log(this.PersonasAdmin)
  }


  LoginAdmin(email:string,password:string){
    const AdminEncontrado = this.PersonasAdmin.find(PersonasAdmin => PersonasAdmin.email === email && PersonasAdmin.password === password);
    return AdminEncontrado;
  }


  RegistrarMedic(Medico:Medic){
    this.PersonasMedic.push(Medico);
  }

  LoginMedic(email:string,password:string){
    this.MedicEncontrado = this.PersonasMedic.find(PersonasMedic => PersonasMedic.email === email && PersonasMedic.password === password);
    return this.MedicEncontrado;
  }
  getUsuarioMedic(){
    return this.MedicEncontrado;
  }

  RegistrarPaciente(Paciente:User){
    this.PersonasPaciente.push(Paciente);
  }

  LoginPaciente(email:string,password:string){
    const PacientEncontrado = this.PersonasPaciente.find(PersonasPaciente => PersonasPaciente.email === email && PersonasPaciente.password == password);
    return PacientEncontrado;
  }



}
