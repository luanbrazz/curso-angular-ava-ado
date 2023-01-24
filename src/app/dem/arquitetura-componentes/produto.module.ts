import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProdutosDashboardComponent } from "./produtos-dashboard/produtos-dashboard.component";
import { ProdutoRoutingModule } from "./produto.route";

//ajuste pipe de moeda
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoDetalheComponent } from "./componentes/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./componentes/produto-count.component";
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoAppComponent } from "./produto.app.component";


@NgModule({
    declarations: [
        ProdutoAppComponent,
        ProdutosDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent,
    ],
    exports: [],
    imports: [
        CommonModule,
        ProdutoRoutingModule,
    ]
})
export class ProdutoModule{

}
