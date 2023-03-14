import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getAllProduct() {
    return this.http.get('/product');
  }

  public get(_id: any) {
    return this.http.get(`/product/${_id}`);
  }

  create(data: any) {
    return this.http.post('/product', data);
  }

  update(_id: any, data: any) {
    return this.http.put(`/product/${_id}`, data);
  }

  delete(_id: any) {
    return this.http.delete(`/product/${_id}`);
  }
  searchProduct(_id: string) {
    return this.http.get<product>(`/product/${_id}`).pipe()
  }
}
