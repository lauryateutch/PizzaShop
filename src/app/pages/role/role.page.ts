import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Roles } from 'src/app/models/roles';
import { User } from 'src/app/models/User';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.page.html',
  styleUrls: ['./role.page.scss'],
})
export class RolePage implements OnInit {

  user: User;
  UserInfoConnection: BehaviorSubject<User>;
  roles:Roles[];
  lengthRole:any;
  select:string;
  
  
  


  constructor(private auth: AuthserviceService, private router:Router) { }

  ionViewWillEnter(){
    if (this.roles.length===1){
      this.router.navigateByUrl('/organisation');
    }
  }


  ngOnInit() {
this.user= this.auth.userConnect;
this.roles=this.user.Role;
this.lengthRole= this.roles.length;


  
  }

 

  selectRole(){
     
    this.auth.permissionChange.next(this.select);
    this.router.navigateByUrl('/organisation');
  }

}
