import { Component } from "@angular/core";
import { ViewController, NavController, Platform } from "ionic-angular";
import { ActionSheetPage } from "./home";
import { variable } from "@angular/compiler/src/output/output_ast";
import { ToastController } from 'ionic-angular';
//import { ToastController } from ‘@ionic-native/ToastController’;

@Component({
  template:`
  <form (ngSubmit)="addressForm()" title="Enter Address">

      <ion-item>
        <ion-label>line1</ion-label>
        <ion-input type="text" [(ngModel)]="iline1" name="address1" id="a1"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>line2</ion-label>
        <ion-input type="text" [(ngModel)]="iline2" name="address2" id="a2"></ion-input>
      </ion-item>
  </form>

  <div padding  style="text-align: center; text-color: red">          
        <button primary block  (click)="s_address()" >Submit</button>
  </div>
  `
})
export class student_address {

  constructor(public navCtrl: NavController,private toast: ToastController) {}

  address_data={line1:'',line2:''}
  s_address()
  {
    console.log(this.address_data);
    //console.log(this.address_data.line2);


    if (this.address_data.line1 != null && this.address_data.line2 != null)
    {
      {{"hiii"}}
    let toast = this.toast.create({
      message: 'Address Successfully saved',
      duration: 3000,
     
      position: 'bottom',
      showCloseButton: true
    });
    toast.present();
  }

  else{

    let toast = this.toast.create({
      message: 'Please enter a valid address',
      duration: 2000,
      position: 'top'
    });
    toast.present();

      }



    //document.write(this.address_data);
  }
}