import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { User } from 'src/app/services/authservice.service';
import { AuthserviceService } from 'src/app/services/authservice.service';
import {filter, map, tap} from  'rxjs/operators';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage implements OnInit {
 
  snapForm!: FormGroup;
  listUser!: User[];
  listUser$:Observable<User[]>; 
  User!: User;
  User$:Observable<User>;
  isConnected: boolean;
  error:string;

  constructor(private formbuilder: FormBuilder, private authService: AuthserviceService, private router: Router,) { }

  ngOnInit():void {

    this.snapForm=this.formbuilder.group({
      username:[null,[Validators.required,Validators.minLength(5)]],
      password:[null,[Validators.required,Validators.minLength(3)]]

    },
    {
      updateOn:'change'
    }
    
    );
  

  }

  onSubmitForm(){

  this.authService.findUser(this.snapForm.value).subscribe((value)=>{
    this.User= value;
    console.log(this.User);
    if(this.User)
      this.authService.generateToken();
      this.authService.generateCookie(this.User);
      this.router.navigateByUrl('/home');
    this.error='veuillez vérifier votre username ou password!!!';
    
  
    
  })

    


 }



get userName() {
    return this.snapForm.get('username');
 }
 get password() {
    return this.snapForm.get('password');
 }  




  

}


