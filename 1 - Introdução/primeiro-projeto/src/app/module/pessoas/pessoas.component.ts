import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})

export class PessoasComponent {
  personagens: string;
  arrayPersonagens: Array<string> = ['Nino', 'Pedro', 'Bia', 'Zequinha', 'Morgana', 'Celeste', 'Tio Vitor'];

  constructor() {
    this.personagens = 'Nino || Pedro || Bia || Zequinha || Morgana || Celeste || Tio Vitor';
  }

}
