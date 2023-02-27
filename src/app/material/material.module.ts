import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

//no olvidar importarlo en pazyzalmos module
//
@NgModule({
 exports:[
    MatIconModule,MatCardModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatFormFieldModule,MatInputModule,MatButtonModule]
})
export class MaterialModule { }
