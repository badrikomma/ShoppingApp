import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { MensService } from '../mens.service';

@Component({
  selector: 'app-shop-mens',
  templateUrl: './shop-mens.page.html',
  styleUrls: ['./shop-mens.page.scss'],
})
export class ShopMensPage implements OnInit {

  men: Product[];

  constructor(private mensService : MensService) { }

  ngOnInit() {
   this.men = this.mensService.getAllProducts();
  }

}
