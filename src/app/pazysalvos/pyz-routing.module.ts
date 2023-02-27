import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { PdfpageComponent } from './pages/pdfpage/pdfpage.component';
import { GenerarPyZComponent } from './pages/generar-py-z/generar-py-z.component';
import { EditarComponent } from './pages/editar/editar.component';
import { HomeComponent } from './pages/home/home.component';

const routes : Routes =[
  {path: '',
    component: HomeComponent,
    children:[
      {
        path:'lobby' ,
        component: LobbyComponent
       },
      {
        path:'consultas' ,
        component: ConsultasComponent
       },
       {
        path:'pdf' ,
        component: PdfpageComponent
       },
       {
        path:'generar' ,
        component: GenerarPyZComponent
       },
       {
        path:'editar/:id' ,
        component: EditarComponent
       },
       {
        path:'**' ,
        redirectTo: ''
       },
    ]}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class PyzRoutingModule { }
