import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalleryPhotoPageRoutingModule } from './gallery-photo-routing.module';

import { GalleryPhotoPage } from './gallery-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalleryPhotoPageRoutingModule
  ],
  declarations: [GalleryPhotoPage]
})
export class GalleryPhotoPageModule {}
