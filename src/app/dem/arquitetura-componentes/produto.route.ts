import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutosDashboardComponent } from "./produtos-dashboard/produtos-dashboard.component";

const produtoRouterConfig: Routes = [
  {
    path: '', component: ProdutoAppComponent,
    children: [
        { path: '', component: ProdutosDashboardComponent },
        { path: 'editar/:id', component: EditarProdutoComponent }
  ]
  }

  // {path: 'produtos', component: ListaProdutosComponent},
  // {path: 'produto-detalhe/:id', component: ListaProdutosComponent},
];

@NgModule({
    imports: [
      // modulo filho
      RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [
      RouterModule
    ]

})
export class ProdutoRoutingModule { }
