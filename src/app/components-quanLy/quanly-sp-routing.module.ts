import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guard/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormProductComponent } from './pages/form-product/form-product.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  { path: 'login-admin', component: LoginComponent, },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'productList', component: ProductListComponent, canActivate: [AuthGuard] },
      { path: 'create-product', component: FormProductComponent, canActivate: [AuthGuard] },
      { path: 'product-update/:_id', component: FormProductComponent },
      { path: 'userList', component: UserListComponent, canActivate: [AuthGuard] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanlySpRoutingModule { }
