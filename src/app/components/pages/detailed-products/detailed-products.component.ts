import { CartService } from '../../../services/cart.service';
import { ProductService } from '../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { product } from 'src/app/models/product.model';
import { LoadingService } from 'src/app/core/services/loading.service';
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
    private cartService: CartService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.getRoutePro(this.route.snapshot.params['_id']);
  }
  getRoutePro(_id: any) {
    this.loadingService.show();
    this.productService.searchProduct(_id).subscribe((data: any) => {
      this.product = data;
      this.loadingService.hide();
    })
  }
}
