import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuanlySpModule } from './components-quanLy/quanly-sp.module';
import { SanphamModule } from './components/sanpham.module';
import { ApiPrefixInterceptor } from './core/interceptors/api-prefix.interceptor';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    SanphamModule,
    QuanlySpModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
