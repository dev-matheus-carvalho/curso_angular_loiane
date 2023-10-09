import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasComponent } from './pessoas.component';



@NgModule({
  declarations: [
    PessoasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PessoasComponent
  ],
})
export class PessoasModule { }
