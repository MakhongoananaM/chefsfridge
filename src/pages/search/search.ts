import { Component } from '@angular/core';
import{ChefsFridgeProvider} from '../../providers/chefs-fridge/chefs-fridge';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { CategoryPage } from '../category/category';
import { ResultsPage } from '../results/results'
//import { ResultsPage } from '../results/results';
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
  category = this.navParams.get("category");
  sub_category = this.navParams.get("sub_cat");
  searchedrecipe = [];
  finalRecipe = [];

  items = [];

  meat = [{ name:"chicken", image:"../../assets/icon/meat-icon/chicken.jpg"},
    {name:"ribs", image:"../../assets/icon/meat-icon/Ribs.jpg"},
   { name:"steak", image:"../../assets/icon/meat-icon/steak.png"},
    {name:"chicken paws", image:"../../assets/icon/meat-icon/chicken paws.jpg"},
    {name:"beef burger", image:"./../assets/icon/meat-icon/beef burger.jpg"},
    {name:"fish", image:"../../assets/icon/meat-icon/fish.jpg"},
    {name:"palony", image:"../../assets/icon/meat-icon/french palony.jpg"},
    {name:"ham", image:"../../assets/icon/meat-icon/ham.jpg"},
    {name:"oxtail", image:"../../assets/icon/meat-icon/oxtail.jpg"}
  ]

  Vege = [{ name:"Broccoli", image:"../../assets/icon/Vegi-Icon/broccoly.jpg"},
    {name:"Carrot", image:"../../assets/icon/Vegi-Icon/carrot.png"},
   { name:"Chillies", image:"../../assets/icon/Vegi-Icon/chillies.png"},
    {name:"ColliFlower", image:"../../assets/icon/Vegi-Icon/colliflower.jpg"},
    {name:"Eggplant", image:"../../assets/icon/Vegi-Icon/eggplant.png" },
    {name:"Garllic", image:"../../assets/icon/Vegi-Icon/garllic.jpg" },
    {name:"greenpepper", image:"../../assets/icon/Vegi-Icon/greenpepper.png"},
    {name:"Onion", image:"../../assets/icon/Vegi-Icon/onion.jpg"},
    {name:"pumpkin", image:"../../assets/icon/Vegi-Icon/pumkin.png" }
  ]

  Fruits = [{ name:"chicken", image:"../../assets/icon/Fruit-icon/green-apple-white-background-15028657.jpg" },
    {name:"ribs", image:"../../assets/icon/Fruit-icon/avocado.png"},
   { name:"steak", image:"../../assets/icon/Fruit-icon/banana.png" },
    {name:"chicken paws", image:"../../assets/icon/Fruit-icon/blueberries.png" },
    {name:"beef burger", image:"../../assets/icon/Fruit-icon/cherries.png" },
    {name:"fish", image:"../../assets/icon/Fruit-icon/grapes.png"},
    {name:"Pea", image:"../../assets/icon/Fruit-icon/images.jpg" },
    {name:"ham", image:"../../assets/icon/Fruit-icon/lemon.png"},
    {name:"oxtail", image:"../../assets/icon/Fruit-icon/mango.jpg"},
    {name:"Pea", image:"../../assets/icon/Fruit-icon/orange.png" },
    {name:"ham", image:"../../assets/icon/Fruit-icon/pineapple.png"}
  ]

 


  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsFridgeProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  addItem(name){
    this.items.push(name);
    console.log(this.items);
    console.log(name);
    
    
  }

  search(){
    var obj = {
        category: this.category,
        sub: this.sub_category,
        items: this.items
    }

    this.navCtrl.push(ResultsPage, obj)
   // this.navCtrl.push(ResultsPage, obj);
    // var ingredients = [];
    // var tempRecipe = [];
    // var temp = [];
    // var temp2 = [];
    // var  commonRecipes = [];
    // var count = 0;
    // var ingred = []
   
    // this.chefsFridge.retreiveRecipe().then((data:any)=>{
    //   this.recipe = data;
      
     
    //   for (let a = 0; a < this.recipe.length; a++) {
    //     if(this.recipe[a].category === this.category && this.recipe[a].sub_category === this.sub_category)
    //     commonRecipes.push(this.recipe[a]);
    //   }
    //   for (let index = 0; index < commonRecipes.length; index++) {
    //     ingred.push({key:commonRecipes[index].key ,ingredients:commonRecipes[index].ingredients});
    //     console.log(ingred);
    //   }

    //   for (let i = 0; i < ingred.length; i++){
    //     ingredients = ingred[i].ingredients;

    //     console.log(ingredients);
    //     count = 0;

    //     console.log("Refreash "+count);
    //     for (let b = 0; b < ingredients.length; b++) {
    //       const element = ingredients[b];
    //       console.log(element);
    //       temp = element.split(",");
    //       console.log(temp);

    //       for (let c = 0; c < temp.length; c++) {
    //        temp2 = temp[c].split(" ");
    //        console.log(temp2);
    //        for (let e = 0; e < temp2.length; e++) {
    //          for (let j = 0; j < this.items.length; j++) {
    //           if(this.items[j] == temp2[e]){
    //             count += 1
    //             console.log("Count "+count);
    //             console.log('item found');
    //             if(count <= 1){
    //               this.searchedrecipe.push(ingred[i].key);
    //             console.log(this.searchedrecipe);
    //             }
    //           }
    //          }   
    //         }        
    //       }
    //     }
    //   }

    //   for (let j = 0; j < this.recipe.length; j++) {
    //     for (let k = 0; k < this.searchedrecipe.length; k++) {
    //       if(this.searchedrecipe[k] === this.recipe[j].key){
            
    //         this.finalRecipe.push(this.recipe[j]);
    //       }
          
    //     }
    //   }
    // })

  }
  profile(){
    this.navCtrl.push(ProfilePage);
  }
  Category(){
    this.navCtrl.push(CategoryPage);
  }
}