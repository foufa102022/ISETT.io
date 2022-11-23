import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { Clubs4cComponent } from './clubs4c/clubs4c.component';
import { DepartementsComponent } from './departements/departements.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

const routes: Routes = [
{path: 'Administration', component: AdministrationComponent},
{path: 'Departements', component: DepartementsComponent},
{path:'Maintenances',component :MaintenanceComponent},
{path:'Club4c',component: Clubs4cComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
