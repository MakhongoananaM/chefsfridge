import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupPage} from '../../pages/signup/signup';
import { user } from '../../interfaces/user';
import { ChefsFridgeProvider } from '../../providers/chefs-fridge/chefs-fridge';
<<<<<<< HEAD
import { Home2Page } from '../home2/home2';
=======
import { HomePage } from '../home/home';
>>>>>>> 8236c9065b37620f83c322ede1c250a05b7a8995

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  user = {} as user

  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsFridgeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  userCreateAccount(){
<<<<<<< HEAD
    this.navCtrl.push(SignupPage);
  }

  userSignIn(user: user){
    this.chefsFridge.signIn(user.email, user.password);
    this.navCtrl.setRoot(Home2Page);
=======
    this.navCtrl.push(SignupPage)
  }

  userSignIn(user: user){
    this.chefsFridge.signIn(user.email, user.password).then(()=> {
      this.navCtrl.setRoot(HomePage);
    } , (error)=>{
      alert(error)

    })
     // 
    
    
>>>>>>> 8236c9065b37620f83c322ede1c250a05b7a8995
  }

  userResetPassword(){
    this.chefsFridge.userResetPassword();
<<<<<<< HEAD
    
=======
>>>>>>> 8236c9065b37620f83c322ede1c250a05b7a8995
  }
}
