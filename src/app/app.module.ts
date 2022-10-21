import { CartModalPageModule } from './pages/cart-modal/cart-modal.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopoverComponent } from './component/popover/popover.component';
import { ListCommandComponent } from './component/list-command/list-command.component';

@NgModule({
  declarations: [AppComponent,PopoverComponent,ListCommandComponent],
  imports: [BrowserModule,
    CartModalPageModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     ReactiveFormsModule,
     FormsModule

],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
