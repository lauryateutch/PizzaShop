import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/authservice.service';
import { AuthserviceService } from 'src/app/services/authservice.service';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage implements OnInit {
 
  snapForm!: FormGroup;
  listUser!: User[];
  listUser$:Observable<User[]>; 

  constructor(private formbuilder: FormBuilder, private authService: AuthserviceService) { }

  ngOnInit():void {

    this.snapForm=this.formbuilder.group({
      username:[null,[Validators.required]],
      password:[null,[Validators.required]]

    },
    {
      updateOn:'blur'
    }
    
    );

  }

  onSubmitForm(){

    this.listUser$= this.authService.getListUser();

    

  }


  

}


