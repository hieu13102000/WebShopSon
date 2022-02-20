import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params} from '@angular/router';
import { product } from 'src/app/models/product.model';
@Component({
  selector: 'app-detailed-products',
  templateUrl: './detailed-products.component.html',
  styleUrls: ['./detailed-products.component.css']
})
export class DetailedProductsComponent implements OnInit {
  product = new product;
  addToCart(product: product) {
    this.cartService.addToCart(product, 1);
    window.alert('Sản phẩm của bạn đã được thêm vào giỏ hàng!');
  }
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
    ) {this.loadScripts(); }

  ngOnInit(): void {
    this.getRoutePro(this.route.snapshot.params['_id']);
  }
  getRoutePro(_id: any){
    this.productService.searchProduct(_id).subscribe((data:any) =>{
      this.product = data;
    })
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
