import { Pensamento } from './../pensamento';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent {
  @Input()
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 200) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
