import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { CursosModule } from './cursos/cursos.module';
import { PessoasModule } from './module/pessoas/pessoas.module';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    PessoasModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
