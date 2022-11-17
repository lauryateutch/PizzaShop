import { Component, enableProdMode, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/User';
import { AuthserviceService } from './services/authservice.service';
import { AppModule } from './app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from 'src/environments/environment';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { platformBrowser } from '@angular/platform-browser';







@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent implements OnInit {
  title= 'comprendre les directives ngstyle et ngclass'
  UserInfoConnection: BehaviorSubject<User>;
  logoutmessage: BehaviorSubject<String>;
  user: User;
  
  constructor(private authServive:AuthserviceService) {}

  ngOnInit() {
   this.UserInfoConnection= this.authServive.getUserInfoConnection();
    this.UserInfoConnection.subscribe(value=>
      this.user= value
      
      )

  }

  

  displaymessage(){
  this.logoutmessage= new BehaviorSubject('ooops vous vous êtes déconnectés');
  console.log('message affiché');
   // this.logoutmessage= this.authServive.getLogoutMessage();
   

  }



  addStyle(){
    return{

      'font-size.px': 20, 
    'font-style': 'italic', 
    'color': 'blue'

    }
    
  }

  addClass(){
    return{
      'btn-bold': true,
       'btn-italic': true, 
       'btn-green':true

    }
  }




}
