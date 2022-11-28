import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from 'src/app/services/authservice.service';
import {filter, map, tap} from  'rxjs/operators';
import { User } from 'src/app/models/User';
import { MenuController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language.service';
import { TranslateService } from '@ngx-translate/core';


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
  ShowPassword= false;
  languages:any;
  placeholderUsername

  constructor(private formbuilder: FormBuilder, private authService: AuthserviceService, private router: Router,
    private menuCtrl: MenuController, private languageservice: LanguageService, private translate: TranslateService) {

      this.translate.stream('CONNECTION.title').subscribe(data=>{
        this.placeholderUsername=data;
        console.log(data);
      });
    
      

     }

  ngOnInit():void {

    this.snapForm=this.formbuilder.group({
      username:[null,[Validators.required,Validators.minLength(5)]],
      password:[null,[Validators.required,Validators.minLength(3)]]

    },
    {
      updateOn:'change'
    }
    
    );

//this.languages=this.translateservice.getLanguages();
  this.languages= this.languageservice.getLanguages();

  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewDidLeave()
  {
    this.menuCtrl.enable(true);
  }

  onSubmitForm(){

  this.authService.findUser(this.snapForm.value).subscribe((value)=>{
    this.User= value;
    console.log(this.User);
    if(this.User){
      this.authService.generateToken();
      this.authService.generateCookie(this.User);
      this.router.navigateByUrl('/role');
    }else{
      this.error='veuillez vérifier votre username ou password!!!';
    }
     
    
  })

 }

 onPasswordToggle():void{
  this.ShowPassword= !this.ShowPassword;
  console.log('salut');
}


selectlng(lng:string){
this.languageservice.setLanguage(lng);

}



get userName() {
    return this.snapForm.get('username');
 }
 get password() {
    return this.snapForm.get('password');
 } 
 
 

 




  

}


