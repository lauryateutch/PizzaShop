import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/User';
import { AuthserviceService } from './services/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  title= 'comprendre les directives ngstyle et ngclass'
  UserInfoConnection: BehaviorSubject<User>;
  user: User;


  constructor(private authServive:AuthserviceService) {}

  ngOnInit() {
   this.UserInfoConnection= this.authServive.getUserInfoConnection();
    this.UserInfoConnection.subscribe(value=>
      this.user= value
      
      )

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
