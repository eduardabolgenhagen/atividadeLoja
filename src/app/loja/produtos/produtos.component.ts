import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  ListaProdutos= [
    1,12,14,2,53,19
  ]
  constructor(
    private router:Router,
  ) { 

  }

  ngOnInit() {
  }

  abrirProduto(produto){
    this.router.navigate(['loja/produto/', produto])
  }

}