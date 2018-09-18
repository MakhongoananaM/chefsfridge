import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { recipe } from '../../interfaces/recipe';
declare var firebase;
/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  // image:any;
  // imageURL: any;
  selectedImage: any;
  recipe = {} as recipe
  ingredients = [];
  item: string;
  methods = [];
  method: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  insertImage(event: any){
    this.selectedImage = event.target.files[0];
  }
  uploadImage(){
    var filename = this.selectedImage.name;
    firebase.storage().ref()
  }
  addIngredients(){
    this.ingredients.push(this.item);
    console.log(this.ingredients); 
  }
  addMethod(){
    this.methods.push(this.method);
    console.log(this.methods);
  }
  addRecipe(recipe:recipe){
    var downloadURL: any;
    var filename = this.selectedImage.name;
    // 
    const metaData = {'contentType': this.selectedImage.type};
    //create reference
    var storageRef = firebase.storage().ref(recipe.category+'/'+recipe.sub_category+'/'+filename)
    //upload the selected image to the storage
    var uploadTask = storageRef.put(this.selectedImage, metaData)
    // Get the download URL
    storageRef.getDownloadURL().then((url) => {
      downloadURL = url;
      console.log(downloadURL);
    }).catch((error) => { 
    });

    setTimeout(() => {
      firebase.database().ref('recipes/').push({
        category: recipe.category,
        sub_category: recipe.sub_category,
        name: recipe.name,
        image: downloadURL,
        ingredients: this.ingredients,
        directions: this.methods,
        description: recipe.description
      })
    }, 5000);
  }

}
