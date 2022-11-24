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
        (element => {
          this.UserInfoConnection.next(element);
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
    let timeout;
    timeout=5;
    this.cookie.set('USERNAME',this.encryptData(user.username),{expires: timeout});
    this.cookie.set('PASSWORD',this.encryptData(user.password),{expires: timeout});


  } 
  
  encryptData(text: string){
    const cryptoJS = require('crypto-js');
    return cryptoJS.AES.encrypt(text, 'Isnov2022').toString();
  }

  decryptData(encryptText){
    const cryptoJS = require('crypto-js');
    const bytes  = cryptoJS.AES.decrypt(encryptText, 'Isnov2022');
    return bytes.toString(cryptoJS.enc.Utf8);
  }


generateToken():string{
  if (this.cookie.get('USERNAME')&& this.cookie.get('PASSWORD'))
      return this.token='MyToken';
  //this.router.navigateByUrl('/connection')
}





  





}
