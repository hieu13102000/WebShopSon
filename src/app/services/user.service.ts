import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators'
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAll() {
    return this.http.get<User[]>('/product');
  }
  get(id: any) {
    return this.http.get<User[]>(`/product/${id}`);
  }

  create(data: any) {
    return this.http.post('/product', data);
  }

  update(id: any, data: any) {
    return this.http.put(`/product/${id}`, data);
  }
  login(username: string, password: string) {
    return new Promise<boolean>((reslove, reject) => {
      this.http.get<User[]>('/auth').pipe(
        map(user => user.filter((val: User) => {
          return val.email === username && val.password === password
        })),
        take(1)
      ).subscribe(users => {
        console.log(users)
        if (users.length > 0) {
          this.authService.setUserAuth(users[0])
          reslove(true)
        } else {
          this.authService.setUserAuth(null)
          reslove(false)
        }
      })
    })

  }

  logout() {
    this.authService.setUserAuth(null);
  }
}
