import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";


@Component({
  template:`
  <form (ngSubmit)="addressForm()" title="Enter Address">
  <ion-item>
  <ion-label>Basketball</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Cricket</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Rugby</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Vollyball</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Tennis</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Carroms</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Badminton</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Kabaddi</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<div padding  style="text-align: center; text-color: red">          
<button primary block  (click)="s_address()" >Submit</button>
</div>
  </form>
 
  `
})
export class student_games {

  constructor(public viewCtrl: ViewController) {

  }

  close() {
    this.viewCtrl.dismiss();
  }
}
