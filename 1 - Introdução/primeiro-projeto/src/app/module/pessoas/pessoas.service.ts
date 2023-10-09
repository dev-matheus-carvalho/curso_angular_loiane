import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor() { }

  getCursos() {
    return ['Nino', 'Pedro', 'Bia', 'Zequinha', 'Morgana', 'Celeste', 'Tio Vitor'];
  }
}
