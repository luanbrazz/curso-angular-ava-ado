import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, Observable } from 'rxjs';
import { ProdutoCountComponent } from '../componentes/produto-count.component';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produtos-dashboard',
  templateUrl: './produtos-dashboard.component.html',
})
export class ProdutosDashboardComponent implements OnInit, AfterViewInit {

  produtos !: Produto[];

  @ViewChild(ProdutoCountComponent, { static: false }) contador !: ProdutoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela !: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.produtos = [
      {
        id: 1,
        nome: 'Teste',
        ativo: true,
        valor: 100,
        imagem: 'celular.jpg'
      },
      {
        id: 2,
        nome: 'Teste 2',
        ativo: true,
        valor: 200,
        imagem: 'crossplat.jpg'
      },
      {
        id: 3,
        nome: 'Teste 3',
        ativo: false,
        valor: 150,
        imagem: 'gopro.jpg'
      },
      {
        id: 4,
        nome: 'Teste 4',
        ativo: true,
        valor: 250,
        imagem: 'headset.jpg'
      },
      {
        id: 5,
        nome: 'Teste 5',
        ativo: true,
        valor: 350,
        imagem: 'laptop.jpg'
      },
      {
        id: 6,
        nome: 'Teste 6',
        ativo: false,
        valor: 650,
        imagem: 'monitor.jpg'
      },
    ]
  }

  ngAfterViewInit(): void {
    console.log('Objeto do Contador: ', this.contador.produtos)

    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('clicou no texto!')
    });
  }

  mudarStatus(event: Produto){
    event.ativo = !event.ativo;
  }
}
