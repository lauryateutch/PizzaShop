import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { PopoverComponent } from '../component/popover/popover.component';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';
import { CartService } from '../services/cart.service';
//import { Component, ViewChild } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  cart= [];
  products =[];
  cartItemCount: BehaviorSubject<number>;
  @ViewChild('cart',{static: false, read: ElementRef})fab: ElementRef;
  @ViewChild('popover') popover;
  isOpen= false;
  roleMsg:any;



  constructor(private cartService: CartService,private modalCtrl: ModalController, public popoverController: PopoverController) { 


  }

ngOnInit(){
  this.products= this.cartService.getProducts();
  this.cart= this.cartService.getCart();
  this.cartItemCount= this.cartService.getCartItemCount();
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






}







