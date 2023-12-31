import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginRegisterComponent } from './pac-autenticacion/login-register/login-register.component';
import { DashboardComponent } from './pac-principal/dashboard/dashboard.component';
import { AdministradorComponent } from './pac-autenticacion/administrador/administrador.component';
import { PacienteComponent } from './pac-autenticacion/paciente/paciente.component';
import { MedicoComponent } from './pac-autenticacion/medico/medico.component';
import { GestorEmpleadosComponent } from './pac-empledo-nomina/gestor-empleados/gestor-empleados.component';
import { GestorNominaComponent } from './pac-empledo-nomina/gestor-nomina/gestor-nomina.component';
import { GestorExpedienteComponent } from './pac-expediente-resultados/gestor-expediente/gestor-expediente.component';
import { GestorInsumosComponent } from './pac-Insumos/gestor-insumos/gestor-insumos.component';
import { AdminComponent } from './pac-urgencias-defuncion/admin/admin.component';
import { MedicComponent } from './pac-urgencias-defuncion/medic/medic.component';
import { RecetasComponent } from './pac-Receta-Farmacia/recetas/recetas.component';
import { FarmaciaAdminComponent } from './pac-Receta-Farmacia/farmacia-admin/farmacia-admin.component';
import { SesionIniciadaMedicoComponent } from './pac-principal/sesion-iniciada-medico/sesion-iniciada-medico.component';
import { SesionIniciadaAdminComponent } from './pac-principal/sesion-iniciada-admin/sesion-iniciada-admin.component';
import { SesionIniciadaPacienteComponent } from './pac-principal/sesion-iniciada-paciente/sesion-iniciada-paciente.component';
import { ResultadosMedicComponent } from './pac-expediente-resultados/resultados-medic/resultados-medic.component';
import { ResultadosPacienteComponent } from './pac-expediente-resultados/resultados-paciente/resultados-paciente.component';
import { PacienteComponentCitas } from './pac-citas/paciente/paciente.component';
import { CitasComponentL } from './pac-citas/citas/citas.component';
import { AuthService } from './autentication.service';
import { citaService } from './cita.service';
import { CitasEComponent } from './pac-citas/citas-e/citas-e.component';
import { CitasMGComponent } from './pac-citas/citas-mg/citas-mg.component';
import { MedicoComponentCitas } from './pac-citas/medico/medico.component';
import { QuejasGralComponent } from './pac-atencion-cliente/quejas-gral/quejas-gral.component';
import { PagoClienteComponent } from './pac-pago/pago-cliente/pago-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginRegisterComponent,
    AdministradorComponent,
    MedicoComponent,
    PacienteComponent,
    GestorEmpleadosComponent,
    GestorNominaComponent,
    GestorExpedienteComponent,
    GestorInsumosComponent,
    AdminComponent,
    MedicComponent,
    RecetasComponent,
    FarmaciaAdminComponent,
    SesionIniciadaMedicoComponent,
    SesionIniciadaAdminComponent,
    SesionIniciadaPacienteComponent,
    ResultadosMedicComponent,
    ResultadosPacienteComponent,
    PacienteComponentCitas,
    CitasComponentL,
    CitasEComponent,
    CitasMGComponent,
    MedicoComponentCitas,
    QuejasGralComponent,
    PagoClienteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService,citaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
