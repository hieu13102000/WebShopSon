import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Son } from '../models/son.model';
@Injectable({
  providedIn: 'root'
})
export class SonService {

  httpOption = {
    headers: new HttpHeaders({'Content-Type': 'Application/json', 'Access-Control-Allow-Origin': '*'})

  }

  url = 'http://localhost:5000/api/products'

  constructor(private http:HttpClient) { }

  getSon(filter: any):Observable<Son[]>{
    console.log(filter);
    return this.http.get<Son[]>(`${this.url}${filter['id']?'?id='+filter['id']: ''}`, this.httpOption).pipe()


  }
}
