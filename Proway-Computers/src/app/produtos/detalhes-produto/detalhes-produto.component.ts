import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent {
  // Cria a propriedade, variável "produto" que será a lista de produtos ou pode ser indefinida.
  produto: IProduto | undefined ;

  Quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,){}

    //Pegar os parametros
  ngOnInit(): void {

    // vai trazer todos os parametros da rota
    const routeParams = this.route.snapshot.paramMap;

    //Para pegar o id do produto,"Number" => converte em "número"
    const produtoId = Number (routeParams.get("id"))

    //pegar o id do produto,
    this.produto = this.produtosService.getOne(produtoId);

  }


}
