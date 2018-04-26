import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";


@Component({
  template:`
  <form (ngSubmit)="addressForm()" title="Enter Address">

  <ion-item>
  <ion-label>Hindi</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>English</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Bengali</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Telugu</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Marathi</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Tamil</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Urdu</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Kannada</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<div padding  style="text-align: center; text-color: red">          
<button primary block  (click)="s_address()" >Submit</button>
</div>
</form>
  `
})
export class student_languages {

  constructor(public viewCtrl: ViewController) {

  }

  close() {
    this.viewCtrl.dismiss();
  }
}
