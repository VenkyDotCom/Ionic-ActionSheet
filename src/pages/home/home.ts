import { Component } from '@angular/core';
import { NavController, ActionSheetController, Popover, ViewController } from 'ionic-angular';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { PopoverController } from 'ionic-angular';
import { student_address } from './student_address';
import { student_courses } from './student_courses';
import { student_games } from './student_games';
import { student_languages } from './student_languages';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class ActionSheetPage {

  constructor(public popoverCtrl: PopoverController,public actionSheetCtrl: ActionSheetController,public navCtrl: NavController,private actionSheet: ActionSheet, public viewCtrl: ViewController) {

}
openActionSheet(){ 
       let actionSheet = this.actionSheetCtrl.create({
        title: 'Student Action Sheet',
        buttons: [
            //address
            {
                text: 'Student Address',
                handler: () => {
                    let popover = this.popoverCtrl.create(student_address);
                    popover.present();
                }
            },
            //courses    
            {
                text: 'Courses Enrolled',
                handler: () => {
                    let popover = this.popoverCtrl.create(student_courses);
                    popover.present();
                    // document.write(courses[0]+"</br>"+courses[1]+"</br>"+courses[2]+"</br>"+courses[3]);
                                   // return true;
                }
            },

            //games
            {
                text: 'Games Inetersted',
                handler: () => {
                    let popover = this.popoverCtrl.create(student_games);
                    popover.present();
                }        
            },

            //languages
            {
                text: 'Languages Known',
                handler: () => {
                    //popover
                    let popover = this.popoverCtrl.create(student_languages);
                    popover.present();
                }
            },

            {
                text: 'Cancel',
                handler: () => {
                    let navTransition = actionSheet.dismiss();
                return false;
                }
            }
        ],

    });
    
        actionSheet.present();  
}

}
