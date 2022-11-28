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
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service' ;
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';



export function createTranslateloader(http: HttpClient){
  return new TranslateHttpLoader(http,'assets/i18n/','.json');
}

@NgModule({
  declarations: [AppComponent,PopoverComponent,ListCommandComponent],
  imports: [BrowserModule,
    CartModalPageModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     ReactiveFormsModule,
     FormsModule,
     HttpClientModule,
     TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory:(createTranslateloader),
        deps: [HttpClient] 
      }
      
    })

],
  providers: [
    CookieService,
    {
     provide: RouteReuseStrategy, 
     useClass: IonicRouteStrategy 
    },
    Storage
  ],
    
  bootstrap: [AppComponent],
})
export class AppModule {}
