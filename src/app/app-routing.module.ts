import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { DadosDoClienteComponent } from './modules/cadastro/dados-do-cliente/dados-do-cliente.component';

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'cadastro', component: CadastroComponent
  },
  {
    path:'cadastro/dados', component: DadosDoClienteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
