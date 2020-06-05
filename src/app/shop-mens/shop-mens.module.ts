import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopMensPageRoutingModule } from './shop-mens-routing.module';

import { ShopMensPage } from './shop-mens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopMensPageRoutingModule
  ],
  declarations: [ShopMensPage]
})
export class ShopMensPageModule {}
