import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlidesComponent } from './components/slides/slides.component';
import { BrandCarouseComponent } from './components/brand-carouse/brand-carouse.component';
import { DetailedProductsComponent } from './components/detailed-products/detailed-products.component';
import { ProductsComponent } from './components/products/products.component';
import { TopProductComponent } from './components/top-product/top-product.component';
import{HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlidesComponent,
    BrandCarouseComponent,
    DetailedProductsComponent,
    ProductsComponent,
    TopProductComponent,
    CartComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
