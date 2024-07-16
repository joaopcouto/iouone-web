import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarCadastroModule } from 'src/app/shared/navbar-cadastro/navbar-cadastro.module';
import { MeioPagamentoComponent } from './meio-pagamento/meio-pagamento.component';
import { EscolherPagamentoButtonModule } from 'src/app/shared/buttons/escolher-pagamento-button/escolher-pagamento-button.module';
import { BotaoCartaoComponent } from './meio-pagamento/botao-cartao/botao-cartao.component';
import { BotaoPixComponent } from './meio-pagamento/botao-pix/botao-pix.component';
import { CartaoComponent } from './cartao/cartao.component';



@NgModule({
  declarations: [
    MeioPagamentoComponent, 
    BotaoCartaoComponent, 
    BotaoPixComponent, 
    CartaoComponent
  ],
  imports: [
    CommonModule,
    NavbarCadastroModule,
    EscolherPagamentoButtonModule
  ]
})
export class PagamentoModule { }
