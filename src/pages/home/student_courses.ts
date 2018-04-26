import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";


@Component({
  template:`
  <form>
  <ion-item>
  <ion-label>Java</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Angular</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Ionic</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Android</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>Cordova</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>JavaScript</ion-label>
  <ion-checkbox color="dark"></ion-checkbox>
</ion-item>

<div padding  style="text-align: center; text-color: red">          
<button primary block  (click)="s_address()" >Submit</button>
</div>
  </form>
  `
})
export class student_courses {

  constructor(public viewCtrl: ViewController) {

  }

  close() {
    this.viewCtrl.dismiss();
  }
    
}
