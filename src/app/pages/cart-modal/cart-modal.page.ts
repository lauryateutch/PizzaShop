import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
  condition: string= '';

  title: string= 'directives structurelle';

  tabdirective: string[]= [ 'ngif','ngfor', 'ngswitch','ngstyle','ngclass'];
  genre : string = 'femme';
  genre_1= 'femme';
  genre_2= 'homme';
  cart: Product[]=[];


  constructor(private cartService: CartService, private modalCtrl:ModalController, private alertCtrl:AlertController) { }

  ngOnInit() {

    this.cart= this.cartService.getCart();
  }

  decreaseCartItem(product){
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product){
    this.cartService.addProduct(product);
  }

  removeCartItem(product){
    this.cartService.removeProduct(product);
  }

  getTotal(){
    return this.cart.reduce((i,j)=>i+j.price*j.amount, 0);
  }

  close(){
    this.modalCtrl.dismiss();
  }

  async checkout(){

    let alert= await this.alertCtrl.create({
      header: 'thanks for your order!',
      message: 'we will deliver your food as soon as possible',
      buttons: ['ok']
    });
    alert.present().then(()=>{
      this.modalCtrl.dismiss();
    });
  }

}
