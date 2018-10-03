import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChefsFridgeProvider } from '../../providers/chefs-fridge/chefs-fridge'
import { locateHostElement } from '@angular/core/src/render3/instructions';
import { ViewRecipePage } from '../view-recipe/view-recipe';
/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  sub_cat = this.navParams.get("sub");
  cat = this.navParams.get("category");
  items = this.navParams.get("items");
  recipe = []
  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsFridgeProvider) {
      console.log("Variables");
      console.log(this.sub_cat);
      console.log(this.cat);
      console.log(this.items);
      
    this.chefsFridge.itemSearch(this.cat, this.sub_cat,this.items).then((data:any)=>{
        this.recipe =  data;
        console.log(data);
        
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  view(key){
    this.navCtrl.push(ViewRecipePage, {key:key})
  }

}
