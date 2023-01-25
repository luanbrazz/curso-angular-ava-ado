import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto;

  constructor(
    // pega a rota da rota ativa
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.produto = this.produtoService.obterPorId(params['id']);
    })
  }

  salvar(){

  }

}
