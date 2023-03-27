import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailedProductsComponent } from './pages/detailed-products/detailed-products.component';
import { ProductsComponent } from './pages/products/products.component';
import { TopProductComponent } from './pages/top-product/top-product.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: TopProductComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:cat', component: ProductsComponent },
      { path: 'detail/:_id', component: DetailedProductsComponent },
      { path: 'cart', component: CartComponent },
    ]
  },
  /* This is a route that will be used when the user navigates to a route that does not exist. */
  // { path: '404-not-found', component: NotFoundComponent },
  // { path: '**', redirectTo: '404-not-found' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanphamRoutingModule { }
