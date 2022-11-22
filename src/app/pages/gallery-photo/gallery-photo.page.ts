import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPhoto } from 'src/app/models/user-photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-gallery-photo',
  templateUrl: './gallery-photo.page.html',
  styleUrls: ['./gallery-photo.page.scss'],
})
export class GalleryPhotoPage implements OnInit {

  photos: UserPhoto[];

  constructor(private photoService: PhotoService, private router : Router) { }

  async ngOnInit() {

    await this.photoService.loadSaved();
    this.photos= this.photoService.photos;
  }

  previouspage(){
    this.router.navigateByUrl('/home');
    
      }

}
