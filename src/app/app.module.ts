// import { APP_BASE_HREF } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
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
import { FileSizePipe } from './dem/pipes/filmes/filesize.pipe';
import { FilmesComponent } from './dem/pipes/filmes/filmes.component';
import { ImageFormaterPipe } from './dem/pipes/filmes/image.pipe';
import { AuthGuard } from './services/app.guard';
import { BarDiZonesModule } from './dem/bar-di-zones/bar.module';
import { BarService } from './dem/bar-di-zones/bar.service';

export const BAR_PROVIDERS: Provider[] = [
  BarService
]


@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    SobreComponent,
    DataBindingComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe,

  ],
  imports: [
    NavegacaoModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CustomFormsModule,
    AppRoutingModule,
    BarDiZonesModule
  ],
  providers: [
    // {provide: APP_BASE_HREF, useValue: '/'}
    AuthGuard,
    // BarService
   //BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
