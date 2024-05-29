import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarCadastroComponent } from './navbar-cadastro.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  declarations: [
    NavbarCadastroComponent
  ],
  imports: [
    MatToolbarModule,
    CommonModule
  ],
  exports: [
    NavbarCadastroComponent
  ]
})
export class NavbarCadastroModule { }
