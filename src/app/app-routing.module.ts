import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'shop-mens',
    loadChildren: () => import('./shop-mens/shop-mens.module').then( m => m.ShopMensPageModule)
  },
  {
    path: 'shop-womens',
    loadChildren: () => import('./shop-womens/shop-womens.module').then( m => m.ShopWomensPageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'shop-mens/:productId',
    loadChildren: () => import('./single-product/single-product.module').then( m=> m.SingleProductPageModule)
  },
  {
    path: 'shop-womens/:womenId',
    loadChildren: () => import('./single-product/single-product.module').then( m=> m.SingleProductPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
