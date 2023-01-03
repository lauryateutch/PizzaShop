import { Component, OnInit, ViewChild } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { IonicSlides, IonSlides } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';
import { Slide } from 'src/app/models/slide';
import { Orderlines } from 'src/app/models/orderlines';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.page.html',
  styleUrls: ['./add-pizza.page.scss'],
})
export class AddPizzaPage implements OnInit {

@ViewChild('mySlider') Slides: IonSlides;

  slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    loop: true
  };

  product: Product[];
  list_orderlines: Product[];

  // template to create several slide by dividing by different items group
   template: {
    
    idSlide:number;
    Product:Product[];
  }[] = []; 

  clicked:boolean= false;

  //template= new Slide(1,this.product);

  constructor(private photoservice: PhotoService, private cartService: CartService) { }

  ngOnInit() {
 this.showGridProduct();
 this.list_orderlines= this.cartService.getCart();
 

  }


  async swipePrev(){
  this.Slides.slidePrev();
    

}

async swipeNext(){
  this.Slides.slideNext();
}


showGridProduct(){
this.cartService.getAllProducts().subscribe((value)=>
 {
  this.product= value;
  console.log("hello"+ this.product+ this.product.length);
  const slideSize= 6;
  
 const  totalSlide= this.product.length/ slideSize;
 const restSlide= this.product.length% slideSize;
if (restSlide == 0){
 for (let i = 0; i< totalSlide; i++){
   const items= this.product.slice(slideSize*i, slideSize* (i+1));
   const slide= new Slide(i+1,[]);

   for (const item of items){

     slide.Product.push(item);

   }
   //console.log(typeof( this.template))

    this.template.push(slide);
  //console.log('template'+ template);

 }
}
})
}


addItem(product){

this.cartService.addProduct(product);
this.clicked= true;
console.log( 'voici le tab:'+ this.list_orderlines);



}

decreaseCartItem(product){
  this.cartService.decreaseProduct(product);
}

increaseCartItem(product){
  this.cartService.addProduct(product);
}


 /*  addPhotoToGallery(){
    this.photoservice.addNewToGallery();
  } */




 

}
