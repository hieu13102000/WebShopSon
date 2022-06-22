
import { Cart } from '../../../models/cart.model';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  tongTien = 0;
  items: Cart[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCart()
    
  }

  getCart(){
    this.items = this.cartService.getItems()
    this.tinhTongTien()
  }

  deleteCart(productID: string){
    this.items = this.items.filter((cart: Cart) =>{
      return cart.product._id !== productID
    })
    localStorage.setItem('carts', JSON.stringify(this.items))
    this.tinhTongTien()
  }
  deleteAllCart(){
    this.items = []
    localStorage.removeItem('carts')
    this.tongTien = 0 ;
  }

  tinhTongTien(): void{
    const calc = () =>{
      return new Promise((reslove, reject) =>{
        let tong = 0
        this.items.forEach((cart: Cart) =>{
          // let donGia = parseInt (cart.product.price.split('.').join('').replace('₫', ''))
          // tong += donGia * cart.amount
        })

        reslove(tong)
      })
    }

    calc().then((tong: any) =>{
      this.tongTien = tong
    })
  }
  thanhToan(){
    alert("Thanh toán thành công")
    this.deleteAllCart()
  }
}
