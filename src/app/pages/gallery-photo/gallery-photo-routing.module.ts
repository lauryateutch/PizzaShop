import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryPhotoPage } from './gallery-photo.page';

const routes: Routes = [
  {
    path: '',
    component: GalleryPhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryPhotoPageRoutingModule {}
