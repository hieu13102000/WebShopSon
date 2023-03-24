import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators'
import { product } from 'src/app/models/product.model';
import { LoadingService } from 'src/app/core/services/loading.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  data: product[] = [];
  cat: string = '';
  public _id = '';
  name = '';
  p: any;
  product: any;

  constructor(private prod: ProductService,
    private route: ActivatedRoute,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.loadingService.show();
    this.route.paramMap.pipe(
      map(cat => cat.get('cat'))
    ).subscribe(catID => {
      if (catID) {
        this.prod.getAllProduct().subscribe((data: any) => {
          this.data = data.filter((item: product) => {
            return item.brand === catID
          })
        })
      }
      else {
        this.prod.getAllProduct().subscribe((data: any) => {
          this.data = data
        })
      }
      this.loadingService.hide();
    })
  }
  Search() {
    if (this.name == "") {
      this.ngOnInit();
    } else {
      this.data = this.data.filter(res => {
        return res.name?.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }
  key = '_id'
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
