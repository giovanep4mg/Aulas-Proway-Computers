import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  //itens é um vetor "lista de produtos", que vai iniciar vazia
  itens: IProdutoCarrinho[] = [] ;

  constructor() { }

  // método que vai trazer a lista de itens salva no navegador, no "local storage"
  obtemCarrinho(){
    /**
     * JSON.parse => vai modificar de string para objeto.
     * se não tiver uma string, vai pegar uma string vazia.
     */
    this.itens = JSON.parse(localStorage.getItem("carrinho") || " [] " );
    return this.itens;

  }

  //
  adicionarAoCarrinho( produto: IProdutoCarrinho){
    // acrescenta os produtos no carrinho
    this.itens.push(produto);

    // salvar esses produtos no "localStorage",convertendo de objeto para string
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  //método remover do carrinho
  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  // método
  limparCarrinho(){
    //para limpar o carrinho
    this.itens = [] ;

    //para limpar o "localStorage"
    localStorage.clear();
  }
}
