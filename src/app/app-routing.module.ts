import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { DadosDoClienteComponent } from './modules/cadastro/dados-do-cliente/dados-do-cliente.component';
import { DadosCorporalComponent } from './modules/cadastro/dados-corporal/dados-corporal.component';
import { MeioPagamentoComponent } from './modules/pagamento/meio-pagamento/meio-pagamento.component';
import { CartaoComponent } from './modules/pagamento/cartao/cartao.component';

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
  {
    path:'cadastro/dados-corporal',component: DadosCorporalComponent
  },
  {
    path:'cadastro/pagamento', component: MeioPagamentoComponent
  },
  {
    path:'cadastro/pagamento/cartao', component: CartaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
