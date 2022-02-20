import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DetailedProductsComponent } from './components/detailed-products/detailed-products.component';
import { ProductsComponent } from './components/products/products.component';
import { TopProductComponent } from './components/top-product/top-product.component';

const routes: Routes = [
  {path: '',component:TopProductComponent},
  {path:'products',component:ProductsComponent},
  {path:'products/:cat',component:ProductsComponent},
  {path:'detail/:_id',component:DetailedProductsComponent},
  {path:'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
