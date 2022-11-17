import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPizzaPageRoutingModule } from './add-pizza-routing.module';

import { AddPizzaPage } from './add-pizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPizzaPageRoutingModule
  ],
  declarations: [AddPizzaPage]
})
export class AddPizzaPageModule {}
