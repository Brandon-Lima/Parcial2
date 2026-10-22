import { Routes } from '@angular/router';
import { InicioComponent } from './inicio-component/inicio-component';
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { ProcesosComponent } from './procesos-component/procesos-component';
import { ReportesComponent } from './reportes-component/reportes-component';
import { ProcesoDetalleComponent } from './proceso-detalle-component/proceso-detalle-component';
import { Error404Component } from './error404-component/error404-component';

export const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "procesos", component: ProcesosComponent},
  {path: "reportes", component: ReportesComponent},
  {path: "proceso/:proceso", component: ProcesoDetalleComponent},
  {path: '**', component: Error404Component}
];