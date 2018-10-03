import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChefsFridgeProvider } from '../../providers/chefs-fridge/chefs-fridge';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  name: string;
  surname: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsFridgeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  editUser(){
    this.chefsFridge.updateProfile(this.name, this.surname);
    this.navCtrl.push(ProfilePage)
  }

  goBack(){
    this.navCtrl.pop();
  }

}
