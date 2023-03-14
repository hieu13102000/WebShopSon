import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dataSeach: product[] = [];
  name = '';
  userAuth!: Observable<User | null>
  constructor(private prod: ProductService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.prod.getAllProduct().subscribe((dataSeach: any) => {
      this.dataSeach = dataSeach
    })
    this.userAuth = this.authService.getUserAuth()
  }
  Search() {
    if (this.name == "") {
      this.ngOnInit();
    } else {
      this.dataSeach = this.dataSeach.filter(res => {
        return res.name?.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

}
