import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanlySpRoutingModule } from './quanly-sp-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
  declarations: [
    FooterComponent,
    LayoutComponent,
    HeaderComponent,
    TopbarComponent,
    AddProductComponent,
    DashboardComponent,
    LoginComponent,
    ProductDetailsComponent,
    ProductListComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    QuanlySpRoutingModule
  ],
  exports: [
    // FooterComponent  //Export để sử dụng được ở Module khác
  ]
})
export class QuanlySpModule { }
