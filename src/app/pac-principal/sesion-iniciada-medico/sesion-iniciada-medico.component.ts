import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/autentication.service';

@Component({
  selector: 'app-sesion-iniciada-medico',
  templateUrl: './sesion-iniciada-medico.component.html',
  styleUrls: ['./sesion-iniciada-medico.component.css']
})
export class SesionIniciadaMedicoComponent implements OnInit{
  Medico:string;

  constructor(private ServicioMedico:AuthService){}


  ngOnInit(): void {
    this.Medico = this.ServicioMedico.MedicEncontrado.name;
    console.log(this.Medico)
  }



}
