import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedProductsComponent } from './front-end/detailed-products/detailed-products.component';
import { ProductsComponent } from './front-end/products/products.component';
import { TopProductComponent } from './front-end/top-product/top-product.component';

const routes: Routes = [
  {path: '',component:TopProductComponent},
  {path:'products',component:ProductsComponent},
  {path:'detailed-products',component:DetailedProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
