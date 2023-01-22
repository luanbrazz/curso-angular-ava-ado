import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProdutosDashboardComponent } from "./produtos-dashboard/produtos-dashboard.component";

const produtoRouterConfig: Routes = [
  { path: '', component: ProdutosDashboardComponent }
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
