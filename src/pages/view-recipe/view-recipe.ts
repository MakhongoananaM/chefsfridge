import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChefsFridgeProvider } from '../../providers/chefs-fridge/chefs-fridge';
/**
 * Generated class for the ViewRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-recipe',
  templateUrl: 'view-recipe.html',
})
export class ViewRecipePage {

  key: string = this.navParams.get('key');
  recipe: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsFridgeProvider) {
    this.chefsFridge.retrieveARecipe(this.key).then((data:any)=>{
      this.recipe = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRecipePage');
  }

}
