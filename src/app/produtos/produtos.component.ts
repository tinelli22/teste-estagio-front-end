import { ProdService } from './prod.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos = [];
  prodSelecionados = [];
  somaTotal = 0;

  constructor(
    private prodService: ProdService,
  ) { }

  ngOnInit() {
    this.prodService.listarProdutos().subscribe((lista: any[]) => {
      
     lista.forEach(produto => {
      const prod = {
        dados: produto,
        check: false,
      };

      this.produtos.push(prod);
     });

    });
  }

  addProduto(prod) {
    console.log(prod.check);
    if(prod.check) {
      this.prodSelecionados.push(prod);
      this.somaTotal += parseFloat(prod.dados.valor);
    } else {
      const index = this.prodSelecionados.indexOf(prod);
      this.prodSelecionados.splice(index, 1);
      this.somaTotal -= parseFloat(prod.dados.valor);
    }
    console.log(this.somaTotal);
  }

}
