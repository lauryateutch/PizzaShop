import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organisation } from 'src/app/models/organisation';
import { Roles } from 'src/app/models/roles';
import { User } from 'src/app/models/User';
import { Warehouse } from 'src/app/models/warehouse';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.page.html',
  styleUrls: ['./organisation.page.scss'],
})
export class OrganisationPage implements OnInit {
user:User
organisations: Organisation[];
warehouses: Warehouse[];
roles:Roles[];


  constructor(private auth: AuthserviceService, private router: Router) { }

  ngOnInit() {
 this.user=this.auth.userConnect;
 this.organisations= this.user.Org;
 this.warehouses= this.user.Wh;
 console.log('mes wh'+ this.warehouses);
 this.roles= this.user.Role;


  }


  back(){
this.router.navigateByUrl('/role');
  }

  initshoppizza(){
    this.router.navigateByUrl('/home');
  }

}
