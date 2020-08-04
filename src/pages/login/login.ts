import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LecturerPage } from './../lecturer/lecturer';

// import { LecturerPage } from './../pages/lecturer/lecturer';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  logindata:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams ,
              public http:HttpClient ) {
    
    this.logindata.username = "";
    this.logindata.password = "";
  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Login(){

    if(this.logindata.username != "" && this.logindata.password!= ""){
      console.log("user:",this.logindata.username);
      console.log("pass:",this.logindata.password);

      

      let url:string = "http://localhost/App/login.php";
      // let dataPost = JSON.stringify({
      //                   user:this.logindata.username,
      //                   pass:this.logindata.password,
      //                 });

      // this.http.post(url,dataPost)
      // .map(res=>res.json())
      // .subscribe(data=>{
      //     console.log(data);
      // });
      let dataPost = new FormData();
      dataPost.append('user', this.logindata.username);
      dataPost.append('pass', this.logindata.password);
            
      let data:Observable<any> = this.http.post(url,dataPost);
      data.subscribe(data =>{

        if(data != null){
        this.navCtrl.push(LecturerPage);
        }
        console.log(data);

      });

                   
    }else{
      console.log("Enter Password");
    }
  }

  RegisLecturer(){
    this.navCtrl.push("RegisLecturerPage");
  }
}
