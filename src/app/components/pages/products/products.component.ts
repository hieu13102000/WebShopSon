import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import {map, switchMap} from 'rxjs/operators'
import { product } from 'src/app/models/product.model';
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

  constructor(private prod: ProductService, private route: ActivatedRoute) {
    this.loadScripts();
  }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      map(cat => cat.get('cat'))
    ).subscribe(catID =>{
      if(catID){
          this.prod.getAllProduct().subscribe((data: any) =>{
            this.data = data.filter((item: product) =>{
              return item.brand === catID
            })
          })
        }
        else{
          this.prod.getAllProduct().subscribe((data: any) =>{
            this.data = data
          })
        }
    })
  }
  Search() {
    if(this.name ==""){
      this.ngOnInit();
    }else{
      this.data = this.data.filter(res =>{
        return res.name?.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }
key ='_id'
reverse: boolean =false;
sort(key: string){
  this.key = key;
  this.reverse = !this.reverse;
}
  loadScripts() {
    const dynamicScripts = [
      '../../../assets/js/jQuery_v3.1.1.min.js',
      '../../../assets/js/owl.carousel.min.js',
      '../../../assets/js/bootstrap.min.js',
      '../../../assets/js/jquery.magnific-popup.js',
      '../../../assets/js/jquery.firstVisitPopup.js',
      '../../../assets/js/custom.js',
      '../../../assets/js/jquery-ui.js',
      '../../../assets/js/custom2.js',
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
