import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { RedesComponent } from './redes/redes.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    ContenidoComponent,
    RedesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
