// import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//IMPORT LOCALIZAÇÃO PT
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

// import { CustomFormsModule } from 'ng2-validation';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './dem/data-binding/data-binding.component';
import { CadastroComponent } from './dem/reactiveForms/cadastro/cadastro.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { AppRoutingModule } from './app.routes.';
import { AuthGuard } from './services/app.guard';
import { FilmesComponent } from './dem/pipes/filmes/filmes.component';
import { FileSizePipe } from './dem/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './dem/pipes/filmes/image.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    SobreComponent,
    DataBindingComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe

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
    // {provide: APP_BASE_HREF, useValue: '/'}
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
