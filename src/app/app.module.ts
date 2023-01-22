import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//IMPORT LOCALIZAÇÃO PT
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

// import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { DataBindingComponent } from './dem/data-binding/data-binding.component';
import { ProdutoService } from './produtos/produtos.service';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './dem/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { AppRoutingModule } from './app.routes.';


@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    SobreComponent,
    DataBindingComponent,
    ListaProdutosComponent,
    CadastroComponent,

  ],
  imports: [
    NavegacaoModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CustomFormsModule,
    AppRoutingModule,
  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
