import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'cadastro', component: CadastroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
