import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent {

  fecha_inicio:any ;
  fecha_fin:any ;
 agregar(){
  console.log([this.fecha_inicio,this.fecha_fin])
 }
  
}
