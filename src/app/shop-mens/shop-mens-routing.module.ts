import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopMensPage } from './shop-mens.page';

const routes: Routes = [
  {
    path: '',
    component: ShopMensPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopMensPageRoutingModule {}
