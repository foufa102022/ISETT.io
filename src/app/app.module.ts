import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartementsComponent } from './departements/departements.component';
import { AdministrationComponent } from './administration/administration.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { Clubs4cComponent } from './clubs4c/clubs4c.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartementsComponent,
    AdministrationComponent,
    MaintenanceComponent,
    Clubs4cComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
