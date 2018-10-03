import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { ProfilePage } from '../profile/profile';
import { CategoryPage } from '../category/category';

/**
 * Generated class for the VeganPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vegan',
  templateUrl: 'vegan.html',
})
export class VeganPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VeganPage');
  }
  srcBF(){
      this.navCtrl.push(SearchPage, {category:"Vegan", sub_cat:"Breakfast"})
  }

  srcDinner(){
    this.navCtrl.push(SearchPage, {category:"Vegan", sub_cat:"Dinner"})
}

srcLunch(){
  this.navCtrl.push(SearchPage, {category:"Vegan", sub_cat:"Lunch"})
}

srcDessert(){
  this.navCtrl.push(SearchPage, {category:"Vegan", sub_cat:"Dessert"})
}
profile(){
  this.navCtrl.push(ProfilePage);
}
Category(){
  this.navCtrl.push(CategoryPage);
}
}