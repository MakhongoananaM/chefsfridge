import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../../interfaces/user';
import {HomePage} from '../../pages/home/home';
import { ToastController, LoadingController, NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
declare var firebase;
var auth = firebase.auth();
/*
  Generated class for the ChefsFridgeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChefsFridgeProvider {

  user = {} as user ;
  url;
  constructor(public http: HttpClient,public loadingCtrl: LoadingController, public toastCtrl: ToastController,public alertCtrl: AlertController) {
    console.log('Hello ChefsFridgeProvider Provider');
  }
  signIn(email,password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      var email= firebase.auth().currentUser.email;
      var password= firebase.auth().currentUser.password;
      //this.navCtrl.push(HomePage);
      const loader = this.loadingCtrl.create({
      content:"please wait",
      duration:3000
      });
      loader.present();
  
    setTimeout(() => {
      loader.dismiss();
    }, 5000);
    })
   }
  SignUp(email ,password ,name ,surname){
    return new Promise((reject, resolve) => {
      //Create a user account with the email and password
      firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
        //add the default image for the user profile
        firebase.storage().ref().child('default profile.png').getDownloadURL().then((url)=>{
          this.url = url;
            alert(url);
        })
        //signing the user in
        firebase.auth().signInWithEmailAndPassword(email , password).then(()=>{
          var uid = firebase.auth().currentUser.uid;
          //setting user info in the database
          firebase.database().ref('users/'+uid+'/details').set({
            name: name,
            surname: surname,
            email:email,
            image: this.url
          })
        }, (error)=>{
          alert(error);
        })
      }, (error)=>{
        const toast = this.toastCtrl.create({
          message: error,
          duration: 3000
        });
        toast.present();
      })
    });
  }

  userResetPassword(){
    const prompt = this.alertCtrl.create({
      title: 'Reset password',
      message: "Please enter your email below...",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email address'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Reset',
          handler: data => {
            console.log('email address is ' + data.email);
            this.resetPassword(data.email);
          }
        }
      ]
    });
    prompt.present();
  
  }

  resetPassword(email : any){
    auth.sendPasswordResetEmail(email).then(function() {
     
    }).catch(function(error) {
      // An error happened.
    });
  } 

}
