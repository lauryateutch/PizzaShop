import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { map } from 'rxjs/operators';



export interface User {
  username: string;
  password: string;
   
  }

@Injectable({
  providedIn: 'root'
})



export class AuthserviceService {

  list_user: User[]=[
    {username:'Ateutchia', password: 'amour'},
    {username:'Laura', password: 'love'},
    {username:'Michèle', password: 'laura'},
    {username:'Tonmezeng', password: 'papier'},
  ];

  constructor(private http: HttpClient) { }

  ListUser:User[]=[]
  private token!: string;
 

  getListUser():Observable<User[]>{
   // return this.list_user;
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

generateToken(){
  this.token= 'MyToken';
}

getToken():string{
  return this.token;
}



  





}
