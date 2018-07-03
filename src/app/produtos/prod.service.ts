import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProdService {

  produtosUrl = 'https://test-front-kratos.firebaseio.com/produtos.json';

  constructor(
    private http: HttpClient,
  ) { }

  listarProdutos() {
    return this.http.get(this.produtosUrl);
  }
}
