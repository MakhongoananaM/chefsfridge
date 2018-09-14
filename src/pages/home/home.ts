import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { user } from '../../interfaces/user';
import {SignupPage} from '../../pages/signup/signup';
import {SignInPage} from '../../pages/sign-in/sign-in';
//import { ChefsFridgeProvider } from '../../providers/chefs-fridge/chefs-fridge';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {
  }

 /*  userLogOut(){
    this.chefsFridge.userLogOut();
    console.log("logging out");
    this.navCtrl.setRoot(SignInPage);
  } */

}
