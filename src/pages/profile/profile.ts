import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChefsFridgeProvider } from '../../providers/chefs-fridge/chefs-fridge'
import { EditProfilePage } from '../edit-profile/edit-profile';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  name: string;
  surname: string;
  // bio:string;
  email: string;
  propic: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsFridgeProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ionViewDidEnter(){
    this.chefsFridge.retrieveUser().then((data:any)=>{

      //console.log(data);
      this.name = data.name;
      this.surname = data.surname;
      this.email = data.email;
      
    } , (error)=>{
     
      
    })
  }

  updateProfile(){
     this.chefsFridge.updateProfile(this.name,this.surname);
  }

  edit(){
    this.navCtrl.push(EditProfilePage);
  }

  back(){
    this.navCtrl.pop();
  }
  
}
