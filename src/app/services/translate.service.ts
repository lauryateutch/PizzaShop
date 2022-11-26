import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core' ;
import {Storage} from '@ionic/storage';


const LNG_KEY= 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class TranslateServices {
  selected= '';
  language!:string;


  constructor( private storage: Storage, private translate: TranslateService) { }


setInitialAppLanguage(){
  let language= this.translate.getBrowserLang();
  this.translate.setDefaultLang(language!);
  this.storage.get(LNG_KEY).then(
    val=>{
      console.log(val)
      if (val){
        this.setLanguage(val);
        this.selected= val;
      }
    }

  );


}

getLanguages(){
  return[
    {text:'English', value:'en'},
    {text:'France', value:'fr'},
      
  ];
}

setLanguage(lng: string){
  this.translate.use(lng);
  this.selected=lng;
  this.storage.set(LNG_KEY, lng);
  
}

 
}




