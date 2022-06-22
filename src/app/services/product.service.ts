import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'Application/json'})
  };
  apiUrl = 'https://61455ce638339400175fc5b0.mockapi.io/product';

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<product[]>{
    return this.http.get<product[]>(this.apiUrl).pipe();
  }
  get(_id: any): Observable<product> {
    return this.http.get<product>(`${this.apiUrl}/${_id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  update(_id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${_id}`, data);
  }

  delete(_id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${_id}`);
  }
  searchProduct(_id: string){
    return this.http.get<product>(`${this.apiUrl}/${_id}`).pipe()
  }
}
