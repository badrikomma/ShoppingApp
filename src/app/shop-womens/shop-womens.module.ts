import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopWomensPageRoutingModule } from './shop-womens-routing.module';

import { ShopWomensPage } from './shop-womens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopWomensPageRoutingModule
  ],
  declarations: [ShopWomensPage]
})
export class ShopWomensPageModule {}
