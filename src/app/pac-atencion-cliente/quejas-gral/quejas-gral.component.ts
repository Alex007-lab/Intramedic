import { Component } from '@angular/core';
import { Reclamo } from './Reclamo.model';
import { Adaptador_Comentario } from './Adaptador_Comentario';
import { Felicitacion } from './Felicitacion.model';

@Component({
  selector: 'app-quejas-gral',
  templateUrl: './quejas-gral.component.html',
  styleUrls: ['./quejas-gral.component.css']
})
export class QuejasGralComponent {

  Reclamos: Reclamo;
  Adapter: Adaptador_Comentario;
  Congrats: Felicitacion;
  nombre: string = "Nombre de prueba";
  reclamo: string = "Reclamo de prueba";
  felicitacion: string;
  nombreDoctor: string;
  areaOespecialidad: string;

  public Crear_queja() {
    this.Reclamos = new Reclamo(this.nombre, this.reclamo);
    this.Reclamos.queja();
    this.Adapter.queja();
    this.Adapter.FPersonalizada();
  }

  public Crear_Felicitacion() {
    this.Congrats = new Felicitacion();
    this.Adapter = new Adaptador_Comentario(this.Congrats,this.nombre,this.felicitacion,this.nombreDoctor,this.areaOespecialidad);
    this.Adapter.queja();
  }

  public Crear_felicitacion_P(){
    this.Congrats = new Felicitacion();
    this.Adapter = new Adaptador_Comentario(this.Congrats,this.nombre,this.felicitacion,this.nombreDoctor,this.areaOespecialidad);
    this.Adapter.FPersonalizada();
  }
}
