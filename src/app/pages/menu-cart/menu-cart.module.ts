import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCartPageRoutingModule } from './menu-cart-routing.module';

import { MenuCartPage } from './menu-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCartPageRoutingModule
  ],
  declarations: [MenuCartPage]
})
export class MenuCartPageModule {}
