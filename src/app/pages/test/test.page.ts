import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})


export class TestPage implements OnInit {
handlerMessage= '';
roleMessage= '';
textMessage= '';
product!:Product;


constructor(private alertController: AlertController, private router:Router, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    const productid= +this.route.snapshot.params['id'];
    this.cartService.getProductById(productid).subscribe((value)=>
    {
      this.product=value;
      console.log(this.product);
    }
    )
  }


  async presentAlert(){
    const alert= await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'are you sure you want to exit this page',
      buttons: ['OK'],

    });
    await alert.present();
  }

  async presentAlertbuttons() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'cancel',
          cssClass:'alert-button-cancel',
          handler: () => {
             this.router.navigateByUrl('/home');
          },
        },
        {
          text: 'OK',
          cssClass:'alert-button-confirm',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;

  }

  async  presentAlertInputs() {

const alert= await this.alertController.create({
  header: 'please submit your command',
  buttons: [
    {
      text: 'submit',
          handler: () => {

             this.router.navigateByUrl('/commands');
          },
    }
    ],
  inputs:[
    {
      placeholder: 'Name',
    },
    {
      type: 'number',
      placeholder:'enter the quantity',
      min:1,
      max:200,
    },
    {
      type: 'textarea',
      placeholder:'the place to deliver'
    },
    {
      type: 'datetime-local',
      placeholder: ''
    },
  ],
});
await alert.present();

  }




}


