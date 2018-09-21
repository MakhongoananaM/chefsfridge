import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';

/**
 * Generated class for the VegetarianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vegetarian',
  templateUrl: 'vegetarian.html',
})
export class VegetarianPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VegetarianPage');
  }
  srcc(){
    this.navCtrl.push(SearchPage);
  }
}
