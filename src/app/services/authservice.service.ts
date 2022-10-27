import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



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

  getListUser():Observable<User[]>{
   // return this.list_user;
   return this.http.get<User[]>('http://localhost:3000/User');
  }





}
