import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  title= 'comprendre les directives ngstyle et ngclass'
  constructor() {}

  addStyle(){
    return{

      'font-size.px': 20, 
    'font-style': 'italic', 
    'color': 'blue'

    }
    
  }

  addClass(){
    return{
      'btn-bold': true,
       'btn-italic': true, 
       'btn-green':true

    }
  }
}
