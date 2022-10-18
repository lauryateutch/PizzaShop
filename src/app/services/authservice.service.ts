import { Injectable } from '@angular/core';



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

  constructor() { }

  getListUser(){
    return this.list_user;
  }





}
