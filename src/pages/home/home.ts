import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { user } from '../../interfaces/user';
<<<<<<< HEAD
import {SignupPage} from '../../pages/signup/signup';
import {SignInPage} from '../../pages/sign-in/sign-in';
//import { ChefsFridgeProvider } from '../../providers/chefs-fridge/chefs-fridge';
=======
import { ChefsFridgeProvider } from '../../providers/chefs-fridge/chefs-fridge';
import {SignInPage} from '../../pages/sign-in/sign-in'; 
import { ProfilePage } from '../profile/profile';
import { CategoryPage } from '../category/category';
import { ViewRecipePage } from '../view-recipe/view-recipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

<<<<<<< HEAD
  constructor(public navCtrl: NavController) {
  }

 /*  userLogOut(){
    this.chefsFridge.userLogOut();
    console.log("logging out");
    this.navCtrl.setRoot(SignInPage);
  } */

=======
  recipe = [];
  count:number = 0;
  items=[]; 
  dishes=[]
  val;
  constructor(public navCtrl: NavController, private chefsFridge: ChefsFridgeProvider) {
  //  this.chefsFridge.retreiveRecipe().then((data:any)=>{

     //console.log(data);
    //  this.recipe = data
    //  console.log(this.recipe);
     
     
  //  } , (error)=>{
    // this.chefsFridge.getSearch2().then((data:any)=>{
    //   this. dishes = data;
    //   console.log(this.dishes);
    // })
     
  //  })
   
  }

  ionViewDidLoad() {
    //cheating the code to display as default
   this.chefsFridge.getSearch3().then((data:any)=>{
      this. dishes = data;
      console.log(this.dishes);
    })
  }

  getItems(event,val){
    //cheating the code to display as default
    if (event.target.value.toLowerCase().length == 0){
      this.chefsFridge.getSearch2().then((data:any)=>{
        this. dishes = data;
        console.log(this.dishes);
      })
    }
    else{
      this.chefsFridge.getSearch(event.target.value).then((data:any)=>{
        this. dishes = data;
        console.log(this.dishes); 
      })//lowercase
      if (val && val.trim()!= ''){
        this.dishes = this.dishes.filter((data)=>{
          return (data.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
  
  
  

  }
 userLogOut(){
    this.chefsFridge.userLogOut();
    console.log("logging out");
    this.navCtrl.setRoot(SignInPage);
  } 

  profile(){
    this.navCtrl.push(ProfilePage);
  }
  Category(){
    this.navCtrl.push(CategoryPage);
  }

  search(){
    
  }
  // likes(key){
    
  //   this.count += 1;
  //   this.chefsFridge.likes(key, this.count);
  // }

  view(key){
    this.navCtrl.push(ViewRecipePage, {key:key});
  }
}
