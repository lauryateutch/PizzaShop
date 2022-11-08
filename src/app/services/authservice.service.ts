import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';




export interface User {
  username: string;
  password: string;
   
  }

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

 
  private token!: string;
 

  getListUser():Observable<User[]>{
   
   return this.http.get<User[]>('http://localhost:3000/User');
  }

  findUser(formValue:{username: string, password:string}):Observable<User>{
    return this.getListUser().pipe(
      map(ListUsers => [...ListUsers].find
        (element=> {
          return element.username=== formValue.username && element.password=== formValue.password
        }), 
        
        )
    )

    

    
  }

  generateCookie(user: User){
 
    this.cookie.set(
      'USERNAME',
      user.username,

    )
  }  


generateToken():string{
  if (this.cookie.get('USERNAME'))
      return this.token='MyToken';
  this.router.navigateByUrl('/connection');
}





  





}
