import { TrainPage } from './../pages/train/train';
// import { LogoutPage } from './../pages/logout/logout';
import { EvaluationPage } from './../pages/evaluation/evaluation';
import { LecturerPage } from './../pages/lecturer/lecturer';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { RegisParticipantsPage } from '../pages/regis-participants/regis-participants';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public event : Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'หน้าเเรก', component: HomePage },
      { title: 'วิทยากร', component: LecturerPage }, 
      { title: 'ประเมิน', component: EvaluationPage }, 
      { title: 'การอบรม', component: TrainPage },

      // { title: 'ผู้เข้าอบรม', component: RegisParticipantsPage },

    ];

  

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}