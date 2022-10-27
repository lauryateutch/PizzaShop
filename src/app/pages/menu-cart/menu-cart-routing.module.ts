import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCartPage } from './menu-cart.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCartPageRoutingModule {}
