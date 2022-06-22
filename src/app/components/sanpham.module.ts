import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanphamRoutingModule } from './sanpham-routing.module';

import { SlidesComponent } from './layout/slides/slides.component';
import { BrandCarouseComponent } from './layout/brand-carouse/brand-carouse.component';
import { DetailedProductsComponent } from './pages/detailed-products/detailed-products.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { TopProductComponent } from './pages/top-product/top-product.component';
import { FormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SlidesComponent,
    BrandCarouseComponent,
    DetailedProductsComponent,
    ProductsComponent,
    TopProductComponent,
    CartComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    SanphamRoutingModule
  ]
})
export class SanphamModule { }
