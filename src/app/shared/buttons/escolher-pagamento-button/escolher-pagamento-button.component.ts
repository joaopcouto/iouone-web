import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-escolher-pagamento-button',
  templateUrl: './escolher-pagamento-button.component.html',
  styleUrls: ['./escolher-pagamento-button.component.css']
})
export class EscolherPagamentoButtonComponent {

  @Input() textButton: string = '';
  @Input() cardLogos: string[] = [];
  @Input() redireciona: string = '#';

}
