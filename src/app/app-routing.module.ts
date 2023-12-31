import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pac-principal/dashboard/dashboard.component';
import { LoginRegisterComponent } from './pac-autenticacion/login-register/login-register.component';
import { AdministradorComponent } from './pac-autenticacion/administrador/administrador.component';
import { PacienteComponent } from './pac-autenticacion/paciente/paciente.component';
import { MedicoComponent } from './pac-autenticacion/medico/medico.component';
import { SesionIniciadaMedicoComponent } from './pac-principal/sesion-iniciada-medico/sesion-iniciada-medico.component';
import { SesionIniciadaPacienteComponent } from './pac-principal/sesion-iniciada-paciente/sesion-iniciada-paciente.component';
import { SesionIniciadaAdminComponent } from './pac-principal/sesion-iniciada-admin/sesion-iniciada-admin.component';
import { MedicoComponentCitas } from './pac-citas/medico/medico.component';
import { PacienteComponentCitas } from './pac-citas/paciente/paciente.component';
import { ResultadosPacienteComponent } from './pac-expediente-resultados/resultados-paciente/resultados-paciente.component';
import { QuejasGralComponent } from './pac-atencion-cliente/quejas-gral/quejas-gral.component';
import { MedicComponent } from './pac-urgencias-defuncion/medic/medic.component';
import { PagoClienteComponent } from './pac-pago/pago-cliente/pago-cliente.component';
import { GestorExpedienteComponent } from './pac-expediente-resultados/gestor-expediente/gestor-expediente.component';

const routes: Routes = [
  { path: 'LoginRegister', component: LoginRegisterComponent },
  { path: 'Admin', component: AdministradorComponent },
  { path: 'Paciente', component: PacienteComponent },
  { path: 'Medico', component: MedicoComponent },
  { path: '', component: DashboardComponent },
  { path: 'DashMedic', component: SesionIniciadaMedicoComponent },
  { path: 'DashPatient', component: SesionIniciadaPacienteComponent },
  { path: 'DashAdmin', component: SesionIniciadaAdminComponent },
  { path: 'CitasMedico', component: MedicoComponentCitas },
  { path: 'CitasPaciente', component: PacienteComponentCitas },
  { path: 'ResulPaciente', component: ResultadosPacienteComponent },
  { path: 'Queja', component: QuejasGralComponent },
  { path: 'Urgencia', component: MedicComponent },
  { path: 'Pago', component: PagoClienteComponent },
  { path: 'Expediente', component: GestorExpedienteComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
