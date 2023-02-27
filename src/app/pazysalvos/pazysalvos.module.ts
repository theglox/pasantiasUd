import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { GenerarPyZComponent } from './pages/generar-py-z/generar-py-z.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { PdfpageComponent } from './pages/pdfpage/pdfpage.component';
import { PyzRoutingModule } from './pyz-routing.module';
import { EditarComponent } from './pages/editar/editar.component';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component';
import { TablapazysalvosComponent } from './components/tablapazysalvos/tablapazysalvos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LobbyComponent,
     GenerarPyZComponent,
    ConsultasComponent,
     PdfpageComponent,
     EditarComponent,
    HomeComponent,
    TablapazysalvosComponent],
  imports: [
    
    PyzRoutingModule,

    CommonModule,
    PyzRoutingModule,
    MaterialModule,
    FormsModule



  ],
  exports:[
    LobbyComponent,
    GenerarPyZComponent

  ]

})
export class PazysalvosModule { }
