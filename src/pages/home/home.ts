import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { user } from '../../interfaces/user';
import { ChefsFridgeProvider } from '../../providers/chefs-fridge/chefs-fridge';
import {SignInPage} from '../../pages/sign-in/sign-in'; 
import { ProfilePage } from '../profile/profile';
import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  recipe = [];
  count:number = 0;

  constructor(public navCtrl: NavController, private chefsFridge: ChefsFridgeProvider) {
   this.chefsFridge.retreiveRecipe().then((data:any)=>{

     //console.log(data);
     this.recipe = data
     console.log(this.recipe);
     
     
   } , (error)=>{
    
     
   })
   
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
}
