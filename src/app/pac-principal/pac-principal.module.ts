import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SesionIniciadaMedicoComponent } from './sesion-iniciada-medico/sesion-iniciada-medico.component';
import { SesionIniciadaAdminComponent } from './sesion-iniciada-admin/sesion-iniciada-admin.component';
import { SesionIniciadaPacienteComponent } from './sesion-iniciada-paciente/sesion-iniciada-paciente.component';

@NgModule({
  declarations: [
    SesionIniciadaMedicoComponent,
    SesionIniciadaAdminComponent,
    SesionIniciadaPacienteComponent,
  ],
  imports: [CommonModule],
})
export class PACPrincipalModule {}
