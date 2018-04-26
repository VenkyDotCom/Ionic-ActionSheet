import { Component } from "@angular/core";
import { ViewController, NavController, Platform } from "ionic-angular";
import { ActionSheetPage } from "./home";
import { variable } from "@angular/compiler/src/output/output_ast";

@Component({
  template:`
  <form (ngSubmit)="addressForm()" title="Enter Address">

      <ion-item>
        <ion-label>line1</ion-label>
        <ion-input type="text" [(ngModel)]="line1" name="address1" id="a1"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>line2</ion-label>
        <ion-input type="text" [(ngModel)]="line2" name="address2" id="a2"></ion-input>
      </ion-item>
  </form>

  <div padding  style="text-align: center; text-color: red">          
        <button primary block  (click)="login()" >Submit</button>
  </div>
  `
})
export class student_address {

  constructor(public navCtrl: NavController) {}

 var line1: string
  var line2: string

  todo = {}
  login() {
    this.line1 = document.getElementById('address1').nodeValue;
    this.line2 = document.getElementById('address2').nodeValue;
    console.log(this.line1)
    console.log(this.line2)
      }
    }
