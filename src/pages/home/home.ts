import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  train(){
    this.navCtrl.push("TrainPage");
  }

  RegisLecturer(){
    this.navCtrl.push("RegisLecturerPage");
  }

  RegisParticipants(){
    this.navCtrl.push("RegisParticipantsPage");
  }
}
