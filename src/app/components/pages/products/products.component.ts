import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators'
import { product } from 'src/app/models/product.model';
import { LoadingService } from 'src/app/core/services/loading.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  isGridView = true;
  @ViewChild('productLayout') productLayout!: ElementRef;

  data: product[] = [];
  cat: string = '';
  public _id = '';
  name = '';
  p: any;
  product: any;

  constructor(private prod: ProductService,
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.loadingService.show();
    this.route.paramMap.pipe(
      map(cat => cat.get('cat'))
    ).subscribe(catID => {
      if (catID) {
        this.prod.getAllProduct().subscribe((data: any) => {
          this.data = data.filter((item: product) => {
            this.loadingService.hide();
            return item.brand === catID
          })
        })
      }
      else {
        this.prod.getAllProduct().subscribe((data: any) => {
          this.data = data
          this.loadingService.hide();
        })
      }
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

  toggleGridView(isGridView: boolean) {
    this.isGridView = isGridView;

    if (isGridView) {
      this.renderer.removeClass(this.productLayout.nativeElement, 'product-list');
      this.renderer.addClass(this.productLayout.nativeElement, 'product-grid');
    } else {
      this.renderer.removeClass(this.productLayout.nativeElement, 'product-grid');
      this.renderer.addClass(this.productLayout.nativeElement, 'product-list');
    }
  }
}
