import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VeganPage } from '../vegan/vegan';
import { VegetarianPage } from '../vegetarian/vegetarian';
import { MeatloverPage } from '../meatlover/meatlover';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  Vega(){
this.navCtrl.push(VeganPage);
  }
  Vegi(){
    this.navCtrl.push(VegetarianPage)
  }
  MeatL(){
    this.navCtrl.push(MeatloverPage)
  }
}
