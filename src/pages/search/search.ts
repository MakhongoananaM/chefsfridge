import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  item: string;
  category: string;
  sub_category: string;
  searchedrecipe = [];
  finalRecipe = [];

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsFridgeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  addItem(){
    this.items.push(this.item);
    console.log(this.items);
    
  }

  search(){
    var ingredients = [];
    var tempRecipe = [];
    var temp = [];
    var temp2 = [];
    var  commonRecipes = [];
    var count = 0;
    var ingred = []
   
    this.chefsFridge.retreiveRecipe().then((data:any)=>{
      this.recipe = data;
      
     
      for (let a = 0; a < this.recipe.length; a++) {
        if(this.recipe[a].category === this.category && this.recipe[a].sub_category === this.sub_category)
        commonRecipes.push(this.recipe[a]);
      }
      for (let index = 0; index < commonRecipes.length; index++) {
        ingred.push({key:commonRecipes[index].key ,ingredients:commonRecipes[index].ingredients});
        console.log(ingred);
      }

      for (let i = 0; i < ingred.length; i++){
        ingredients = ingred[i].ingredients;

        console.log(ingredients);
        count = 0;

        console.log("Refreash "+count);
        for (let b = 0; b < ingredients.length; b++) {
          const element = ingredients[b];
          console.log(element);
          temp = element.split(",");
          console.log(temp);

          for (let c = 0; c < temp.length; c++) {
           temp2 = temp[c].split(" ");
           console.log(temp2);
           for (let e = 0; e < temp2.length; e++) {
             for (let j = 0; j < this.items.length; j++) {
              if(this.items[j] == temp2[e]){
                count += 1
                console.log("Count "+count);
                console.log('item found');
                if(count <= 1){
                  this.searchedrecipe.push(ingred[i].key);
                console.log(this.searchedrecipe);
                }
              }
             }   
            }        
          }
        }
      }

      for (let j = 0; j < this.recipe.length; j++) {
        for (let k = 0; k < this.searchedrecipe.length; k++) {
          if(this.searchedrecipe[k] === this.recipe[j].key){
            
            this.finalRecipe.push(this.recipe[j]);
          }
          
        }
      }
    })

  }

}
