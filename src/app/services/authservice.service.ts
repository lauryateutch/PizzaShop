import { Injectable, NgModule } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { User } from '../models/User';



@NgModule({
  providers:[
    CookieService
  ]
})  

@Injectable({
  providedIn: 'root'
})



export class AuthserviceService {


  constructor(private http: HttpClient, private cookie : CookieService, private router: Router) { }

   private user1= new User();
  private token!: string;
  private UserInfoConnection= new BehaviorSubject(this.user1);
  private logoutmessage= new BehaviorSubject('ooops vous vous êtes déconnectés');
 

  getListUser():Observable<User[]>{
   
   return this.http.get<User[]>('http://localhost:3000/User');
  }

  findUser(formValue:{username: string, password:string}):Observable<User>{
    return this.getListUser().pipe(
      map(ListUsers => [...ListUsers].find
        (element=> {
          this.UserInfoConnection.next(formValue);
          return element.username=== formValue.username && element.password=== formValue.password
        }), 
        
        )
    )

    

    
  }

  getUserInfoConnection(){
  return this.UserInfoConnection;
  }

  getLogoutMessage(){
    return this.logoutmessage;
  }

  generateCookie(user: User){

    var CryptoJs= require("crypto-js");
    //encrypt
    var usernamecrypt= CryptoJs.AES.encrypt(user.username,'secret key 123').toString();
    console.log('Voici le texte encrypté '+ usernamecrypt);
 
    this.cookie.set(
      'USERNAME',
      usernamecrypt,

    )
  }  


generateToken():string{
  if (this.cookie.get('USERNAME'))
      return this.token='MyToken';
  //this.router.navigateByUrl('/connection')
}





  





}
