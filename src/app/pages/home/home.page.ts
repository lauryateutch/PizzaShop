import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { PopoverComponent } from '../../component/popover/popover.component';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { CartService,  } from '../../services/cart.service';
import { Product } from 'src/app/models/product';
import { AuthserviceService } from 'src/app/services/authservice.service';
//import { Component, ViewChild } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  cart= [];
  products$:Observable <Product[]>;
  logoutmessage: BehaviorSubject<String>;
  cartItemCount: BehaviorSubject<number>;
  @ViewChild('cart',{static: false, read: ElementRef})fab: ElementRef;
  @ViewChild('popover') popover;
  isOpen= false;
  roleMsg:any;



  constructor(private cartService: CartService,private modalCtrl: ModalController, public popoverController: PopoverController,private router: Router,private authService: AuthserviceService) { 


  }

ngOnInit(){
  
  this.cart= this.cartService.getCart();
  this.cartItemCount= this.cartService.getCartItemCount();
   this.products$= this.cartService.getAllProducts();
  
}

addToCart(product){
  this.cartService.addProduct(product);
  this.animateCSS('tada');
  console.log(product);
  console.log(this.cart);
}

presentPopoversimple(e:Event){
  this.popover.event=e;
  this.isOpen=true;
}

 async presentPopover(e: Event){
const popover= await this.popoverController.create({
  component: PopoverComponent,
  event: e,
});

await popover.present();
const { role} = await popover.onDidDismiss();
this.roleMsg = `Popover dismissed with role: ${role}`;

 }
 

getColor(country){(2)

  switch (country) {
    case 'France':
      return 'green';

    case 'italie':
      return 'blue';

    case 'cuba':
      return 'red';

    case 'canada':
      return 'yellow';  
  }

}

async openCart(){
  this.animateCSS('bounceOutLeft', true);

  let modal= await this.modalCtrl.create({
    component:CartModalPage,
    cssClass: 'cart-modal'
  });

  modal.onWillDismiss().then(()=>
  {
    this.fab.nativeElement.classList.remove('animated','bounceOutLeft')
    this.animateCSS('bounceInLeft')
  });

  modal.present();
}

animateCSS(animationName, keepAnimated = false) {
  const node = this.fab.nativeElement;
  node.classList.add('animated', animationName)

  //https://github.com/daneden/animate.css
  function handleAnimationEnd() {
    if (!keepAnimated) {
      node.classList.remove('animated', animationName);
    }
    node.removeEventListener('animationend', handleAnimationEnd)
  }
  node.addEventListener('animationend', handleAnimationEnd)
}


 viewItem(id){

  this.router.navigateByUrl(`home/${id}`);
} 






}







