import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { QuanlySpModule } from './components-quanLy/quanly-sp.module';
import { SanphamModule } from './components/sanpham.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SanphamModule,
    QuanlySpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
