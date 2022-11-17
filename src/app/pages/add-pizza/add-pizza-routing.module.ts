import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPizzaPage } from './add-pizza.page';

const routes: Routes = [
  {
    path: '',
    component: AddPizzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPizzaPageRoutingModule {}
