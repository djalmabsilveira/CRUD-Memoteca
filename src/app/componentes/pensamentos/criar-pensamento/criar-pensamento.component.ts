import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: 'xxxxxxxx',
    autoria: 'dev',
    modelo: 'modelo2',
  };
  constructor() {}
  ngOnInit(): void {}

  criarPensamento() {}

  cancelar() {}
}
