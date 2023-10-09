import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url: string = 'http://www.google.com';
  num1: number = 52;
  num2: number = 37;

  imagem1: string = 'http://lorempixel.com.br/500/400/?1';
  imagem2: string = 'http://lorempixel.com.br/500/400/?2';

  getValor() {
    return 3;
  }

}
