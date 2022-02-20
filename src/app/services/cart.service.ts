import { Cart } from '../models/cart.model';
import { Injectable } from '@angular/core';
import { product } from '../models/product.model';
import { JsonpClientBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: Cart[] = [];
  addToCart(product: product, amount: number) {
    const cartList = localStorage.getItem('carts');
    if (cartList) {
      this.cartList = JSON.parse(cartList);
      const checkExist = () => {
        let itemExistIndex: number = -1;
        return new Promise((reslove, rejects) => {
          for (let i = 0; i < this.cartList.length; i++) {
            if (this.cartList[i]['product']['_id'] == product['_id']) {
              itemExistIndex = i;
            }
          }
          reslove(itemExistIndex);
        });
      };

      checkExist().then((val: any) => {
        if (val != -1) {
          const currentAmount = this.cartList[val]['amount'];
          this.cartList[val]['amount'] = amount + currentAmount;
          localStorage.setItem('carts', JSON.stringify(this.cartList));
          console.log(this.cartList);
        } else {
          this.cartList.push({ product, amount: amount });
          localStorage.setItem('carts', JSON.stringify(this.cartList));
          console.log(this.cartList);
        }
      });
    } else {
      this.cartList.push({ product, amount: amount });
      localStorage.setItem('carts', JSON.stringify(this.cartList));
      console.log(this.cartList);
    }
  }

  getItems() {
    let cartList: Cart[] = []
    const cartStorge = localStorage.getItem('carts')
    if(cartStorge){
      cartList = JSON.parse(cartStorge)
    }

    return cartList
  }


  constructor() {}
}
