import { ParticipantsPage } from './../participants/participants';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';



@IonicPage()
@Component({
  selector: 'page-login1',
  templateUrl: 'login1.html',
})
export class Login1Page {
  logindata: any;

  constructor(public navCtrl: NavController, public navParams: NavParams ,
    public http:HttpClient ) {

this.logindata.username = "";
this.logindata.password = "";

}


ionViewDidLoad() {
console.log('ionViewDidLoad LoginPage');
}

Login1(){

if(this.logindata.username != "" && this.logindata.password!= ""){
console.log("user:",this.logindata.username);
console.log("pass:",this.logindata.password);



let url:string = "http://localhost/App/login1.php";
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
this.navCtrl.push(ParticipantsPage);
}
console.log(data);

});

         
}else{
console.log("Enter Password");
}
}

  
RegisParticipants(){
    this.navCtrl.push("RegisParticipantsPage");
  }
}





