import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.page.html',
  styleUrls: ['./add-pizza.page.scss'],
})
export class AddPizzaPage implements OnInit {

  constructor(private photoservice: PhotoService) { }

  ngOnInit() {
  }

  addPhotoToGallery(){
    this.photoservice.addNewToGallery();
  }

}
