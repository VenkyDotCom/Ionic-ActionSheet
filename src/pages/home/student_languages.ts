import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";


@Component({
  template:`<ion-list>
    <ion-list-header>Ionic</ion-list-header>
    <button ion-item (click)="close()">English</button>
    <button ion-item (click)="close()">Kannada</button>
    <button ion-item (click)="close()">Tamil</button>
    <button ion-item (click)="close()">Telugu</button>
    </ion-list>`
})
export class student_languages {

  constructor(public viewCtrl: ViewController) {

  }

  close() {
    this.viewCtrl.dismiss();
  }
}
