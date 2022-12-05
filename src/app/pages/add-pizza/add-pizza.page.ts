import { Component, OnInit, ViewChild } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { IonicSlides, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.page.html',
  styleUrls: ['./add-pizza.page.scss'],
})
export class AddPizzaPage implements OnInit {
@ViewChild('mySlider') slides: IonSlides;
  slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 8,
    slidesPerView: 1.5,
    freeMode: true,
    loop: true
  };

  constructor(private photoservice: PhotoService) { }

  ngOnInit() {
  }

 /*  addPhotoToGallery(){
    this.photoservice.addNewToGallery();
  } */

 

}
