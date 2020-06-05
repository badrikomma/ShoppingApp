import { Injectable } from '@angular/core';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class MensService {

  private Mens : Product[] = [
    {
      id:'m1',
      title : 'USPA',
      des : 'Mens dual shirt',
      imageUrl : './assets/mens/mens1.jpg',
      cost: '2000',
    },
    {
      id: 'm2',
      title: 'Indian Polo',
      des: 'Mens stylish pink shirt',
      imageUrl : './assets/mens/mens2.jpg',
      cost : '1500',
    },
    {
      id: 'm3',
      title: 'Louis Philip',
      des: 'Stylish Checks Shirt',
      imageUrl: './assets/mens/mens3.jpg',
      cost: '1200',
    },
    {
      id: 'm4',
      title: 'Max',
      des: 'stylish mens wear',
      imageUrl: './assets/mens/mens4.jpg',
      cost: '1225',
    },
    {
      id: 'm5',
      title: 'Indian Polo',
      des: 'Dual mens shirt',
      imageUrl: './assets/mens/mens5.jpg',
      cost: '2500',
    },
    {
      id: 'm6',
      title: 'Rebook',
      des: 'mens stylish polo shirt',
      imageUrl: './assets/mens/mens6.jpg',
      cost: '2000',
    }

  ]

  constructor() { }

  getAllProducts(){
    return [...this.Mens];
  }

  getMensProduct(ProductId: string){
    return{
      ...this.Mens.find( men=>{
        return men.id === ProductId;
      })
    };
  }
}
