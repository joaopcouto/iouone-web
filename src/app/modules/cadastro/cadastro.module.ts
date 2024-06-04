import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { NavbarCadastroModule } from 'src/app/shared/navbar-cadastro/navbar-cadastro.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { EnterButtonModule } from 'src/app/shared/enter-button/enter-button.module';
import { DadosDoClienteComponent } from './dados-do-cliente/dados-do-cliente.component';
import { DadosCorporalComponent } from './dados-corporal/dados-corporal.component';



@NgModule({
  declarations: [CadastroComponent, DadosDoClienteComponent, DadosCorporalComponent],
  imports: [
    CommonModule,
    NavbarCadastroModule,
    MatFormFieldModule,
    MatInputModule,
    EnterButtonModule,
    MatSelectModule
  ]
})
export class CadastroModule { }
