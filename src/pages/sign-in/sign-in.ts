import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupPage} from '../../pages/signup/signup';
import { user } from '../../interfaces/user';
import { ChefsFridgeProvider } from '../../providers/chefs-fridge/chefs-fridge';

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
    this.navCtrl.push(SignupPage);
  }

  userSignIn(user: user){
    this.chefsFridge.signIn(user.email, user.password);
  }

  userResetPassword(){
    this.chefsFridge.userResetPassword();
  }
}
