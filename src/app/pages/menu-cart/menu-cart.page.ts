import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-cart',
  templateUrl: './menu-cart.page.html',
  styleUrls: ['./menu-cart.page.scss'],
})
export class MenuCartPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  encrypt(){
    var CryptoJs= require("crypto-js");
    //encrypt
    var ciphertext= CryptoJs.AES.encrypt('Bonjour Laura','secret key 123').toString();
    console.log('Voici le texte encryter '+ciphertext);

    //decrypt
    var bytes= CryptoJs.AES.decrypt(ciphertext,'secret key 123');
    console.log( 'voici le texte décrypté '+bytes);
    var originalText= bytes.toString(CryptoJs.enc.Utf8);
    console.log('voici le texte originale'+ originalText);
  }

  previouspage(){
this.router.navigateByUrl('/home');

  }

}
