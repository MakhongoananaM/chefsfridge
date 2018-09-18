import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChefsFridgeProvider } from '../../providers/chefs-fridge/chefs-fridge';
import { recipe } from '../../interfaces/recipe';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  recipe = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsFridgeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  search(){
    this.chefsFridge.retreiveRecipe().then((data:any)=>{
      this.recipe = data;
    }, (error)=>{

    });

    for (let i = 0; i < this.recipe.length; i++) {
      var ingreds = this.recipe[i].ingredients;
      for (let x = 0; x < ingreds.length; x++) {
        const element = ingreds[x];
        console.log(element);
        var  tempIngreds = element.split(" ");
        console.log(tempIngreds);
        
      }
    }
  }

}
