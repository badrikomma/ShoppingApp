import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopWomensPage } from './shop-womens.page';

const routes: Routes = [
  {
    path: '',
    component: ShopWomensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopWomensPageRoutingModule {}
