import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingComponent } from './loading/loading.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NotFoundComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NotFoundComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
