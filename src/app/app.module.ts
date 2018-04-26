import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Popover, PopoverController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ActionSheet } from '@ionic-native/action-sheet';


import { MyApp } from './app.component';
import { ActionSheetPage } from '../pages/home/home';
import { student_address } from '../pages/home/student_address';
import { student_courses } from '../pages/home/student_courses';
import { student_games } from '../pages/home/student_games';
import { student_languages } from '../pages/home/student_languages';

@NgModule({
  declarations: [
    MyApp,
    ActionSheetPage,
    student_address,
    student_courses,
    student_games,
    student_languages
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActionSheetPage,
    student_address,
    student_courses,
    student_games,
    student_languages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ActionSheet,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
