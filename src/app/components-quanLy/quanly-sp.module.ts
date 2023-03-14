import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanlySpRoutingModule } from './quanly-sp-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormProductComponent } from './pages/form-product/form-product.component';

@NgModule({
  declarations: [
    FooterComponent,
    LayoutComponent,
    HeaderComponent,
    TopbarComponent,
    DashboardComponent,
    LoginComponent,
    ProductListComponent,
    UserListComponent,
    FormProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    QuanlySpRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  exports: [
    // FooterComponent  //Export để sử dụng được ở Module khác
  ]
})
export class QuanlySpModule { }
