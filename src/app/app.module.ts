import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './front-end/header/header.component';
import { FooterComponent } from './front-end/footer/footer.component';
import { SlidesComponent } from './front-end/slides/slides.component';
import { BrandCarouseComponent } from './front-end/brand-carouse/brand-carouse.component';
import { DetailedProductsComponent } from './front-end/detailed-products/detailed-products.component';
import { ProductsComponent } from './front-end/products/products.component';
import { TopProductComponent } from './front-end/top-product/top-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlidesComponent,
    BrandCarouseComponent,
    DetailedProductsComponent,
    ProductsComponent,
    TopProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
