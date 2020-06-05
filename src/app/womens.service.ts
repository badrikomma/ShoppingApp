import { Injectable } from '@angular/core';
import { Product } from './product';
import { NodeWithI18n } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class WomensService {

  womens : Product[] = [
    {
      id: 'w1',
      title: 'maroon',
      des: 'Stylish womens maroon dress',
      imageUrl: './assets/women/1.jpg',
      cost: '750',
    },
    {
      id:'w2',
      title: 'combo',
      des: 'This is a pack of 2 stylish womens dress',
      imageUrl: './assets/women/2.jpg',
      cost: '2000',
    },
    {
      id:'w3',
      title:'pink chudidar',
      des: 'stylish womens pink chudidar',
      imageUrl: './assets/women/3.jpg',
      cost: '1500',
    },
    {
      id: 'w4',
      title: 'yellow',
      des: 'gorgeous yellow dress',
      imageUrl: './assets/women/4.jpg',
      cost: '1250',
    },
    {
      id: 'w5',
      title: 'nike',
      des: 'beautiful black color womens wear',
      imageUrl: './assets/women/5.jpg',
      cost: '3000',
    },
    {
      id: 'w6',
      title: 'reebok',
      des: 'classy black party wear',
      imageUrl: './assets/women/6.jpg',
      cost: '5000',
    }
  ]

  constructor() { }

  getAllproducts(){
    return [...this.womens];
  }

  getWomensProduct(womenId: string){
    return{
      ...this.womens.find( women=>{
        return women.id === womenId;
      })
    };
  }
}
