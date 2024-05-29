import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { NavbarCadastroModule } from 'src/app/shared/navbar-cadastro/navbar-cadastro.module';



@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    NavbarCadastroModule
  ]
})
export class CadastroModule { }
