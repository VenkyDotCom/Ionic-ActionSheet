import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";


@Component({
  template:`
  <ion-list>
    <ion-list-header>Ionic</ion-list-header>
    <button ion-item (click)="close()">Java</button>
    <button ion-item (click)="close()">Angular</button>
    <button ion-item (click)="close()">Ionic</button>
    <button ion-item (click)="close()">JavaScript</button>
  </ion-list>`
})
export class student_courses {

  constructor(public viewCtrl: ViewController) {

  }

  close() {
    this.viewCtrl.dismiss();
  }
    
}
