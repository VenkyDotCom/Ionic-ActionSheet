import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";


@Component({
  template:`<ion-list>
    <ion-list-header>Ionic</ion-list-header>
    <button ion-item (click)="close()">Basketball</button>
    <button ion-item (click)="close()">Cricket</button>
    <button ion-item (click)="close()">Rugby</button>
    <button ion-item (click)="close()">Vollyball</button>
    </ion-list>`
})
export class student_games {

  constructor(public viewCtrl: ViewController) {

  }

  close() {
    this.viewCtrl.dismiss();
  }
}
