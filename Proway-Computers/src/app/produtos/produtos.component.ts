import { IProduto, produtos } from './../produtos';
import { Component } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})


export class ProdutosComponent {
  produtos: IProduto [] | undefined;

  //Para importa os serviços de produtos
  constructor(private produtosService: ProdutosService){}


  //Para obter todos os produtos
  OnInit(): void {
    this.produtos = this.produtosService.getAll();

}

}
