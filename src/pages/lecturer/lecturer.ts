import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LecturerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lecturer',
  templateUrl: 'lecturer.html',
})
export class LecturerPage {

  logindata :any =[];
  trianlecturer: any;
  train: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LecturerPage');
    this.logindata = this.navParams.data;
    console.log(this.logindata);
  }

  // loaddata(){
  //   this.train.getTrain().subscribe(train=>{
  //     this.trianlecturer=train;
  //     console.log(train);
  //   });
  // }

  // dataSelected(data: string) {
  //   console.log("Selected Item", data);
  // }

}
