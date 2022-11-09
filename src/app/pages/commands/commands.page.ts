import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.page.html',
  styleUrls: ['./commands.page.scss'],
})
export class CommandsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  previouspage(){
    this.router.navigateByUrl('/home');
    
      }

}
