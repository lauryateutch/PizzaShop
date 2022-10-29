import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

 


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor(private http: HttpClient) { }

 

  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/Products');
  }

  getProductById(id: number):Observable<Product>{
     
    return this.http.get<Product>('http://localhost:3000/Products'+ id );

  }




 /*  getProductById(productiD:number){

    const product= this.data.find(product=> product.id ===productiD);
    if (!product){
      throw new Error('Product not found');

    }else{

      return product;
    }
  } */

  getCart() {
    return this.cart;

  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    
    for (let p of this.cart) {
      console.log('salut');
      if (p.id === product.id) {
       
        p.amount += 1;
       added = true;
        break;

      }
    }


      if(!added) {
       
        product.amount = 1;
        this.cart.push(product);
      }
      this.cartItemCount.next(this.cartItemCount.value + 1);

    }
  

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }

    this.cartItemCount.next(this.cartItemCount.value - 1);


  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {

      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);


      }

    }

  }







}


