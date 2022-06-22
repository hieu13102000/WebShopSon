import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent,},
  {path: '',
  component:LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      { path: 'productList', component: ProductListComponent, canActivate: [AuthGuard]},
      { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard]},
      { path: 'productDetails/:_id', component: ProductDetailsComponent},
      { path: 'userList', component: UserListComponent, canActivate: [AuthGuard]},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanlySpRoutingModule { }
