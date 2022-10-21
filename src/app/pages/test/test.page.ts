import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
handlerMessage= '';
roleMessage= '';
textMessage= '';


  constructor(private alertController: AlertController, private router:Router) { }

  ngOnInit() {
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


