import { Component } from '@angular/core';
import { PessoasService } from './pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})

export class PessoasComponent {
  personagens: string;
  arrayPersonagens: Array<string>;

  constructor(private pessoaService: PessoasService) {
    this.personagens = 'Nino || Pedro || Bia || Zequinha || Morgana || Celeste || Tio Vitor';
    this.arrayPersonagens = this.pessoaService.getCursos();
  }

}
