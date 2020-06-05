import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { WomensService } from '../womens.service';

@Component({
  selector: 'app-shop-womens',
  templateUrl: './shop-womens.page.html',
  styleUrls: ['./shop-womens.page.scss'],
})
export class ShopWomensPage implements OnInit {
  
  women : Product[];

  constructor( private womensService : WomensService) { }

  ngOnInit() {
    this.women = this.womensService.getAllproducts();
  }

}
