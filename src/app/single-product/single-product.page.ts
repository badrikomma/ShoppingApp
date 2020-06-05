import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { MensService } from '../mens.service';
import {WomensService } from '../womens.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.page.html',
  styleUrls: ['./single-product.page.scss'],
})
export class SingleProductPage implements OnInit {
  loadedProduct : Product;

  constructor(
    private activedRoute : ActivatedRoute,
    private mensService : MensService,
    private womensService : WomensService,

  ) { }

  ngOnInit() {
    this.activedRoute.paramMap.subscribe(paramMap => {
      if(paramMap.has('productId')){
        const productId = paramMap.get('productId');
        this.loadedProduct = this.mensService.getMensProduct(productId);
      }
      else if(paramMap.has('womenId')){
      this.activedRoute.paramMap.subscribe(paramMap => {
        const womenId = paramMap.get('womenId');
        this.loadedProduct = this.womensService.getWomensProduct(womenId);
      })
    }
    })
  }
    
}
