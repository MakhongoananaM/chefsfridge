import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../../interfaces/user';
import {HomePage} from '../../pages/home/home';
<<<<<<< HEAD
import {SignInPage} from '../../pages/sign-in/sign-in'
import { ToastController, LoadingController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Home2Page } from '../../pages/home2/home2'
=======
import{objupdate}from '../../pages/profileupdate';
import { ToastController, LoadingController, NavController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { getNonHydratedSegmentIfLinkAndUrlMatch } from 'ionic-angular/navigation/url-serializer';

>>>>>>> 8236c9065b37620f83c322ede1c250a05b7a8995
declare var firebase;
var auth = firebase.auth();
/*
  Generated class for the ChefsFridgeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChefsFridgeProvider {
  user = {} as user ;
  url;
<<<<<<< HEAD
  constructor(public http: HttpClient,
              public loadingCtrl: LoadingController, 
              public toastCtrl: ToastController,
              public alertCtrl: AlertController) {
    console.log('Hello ChefsFridgeProvider Provider');
  }
  signIn(email,password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
     
      const loader = this.loadingCtrl.create({
      content:"please wait",
      duration:3000
      });
      loader.present();
  
    setTimeout(() => {
      loader.dismiss();
    }, 5000);
    })
=======
  recipe = [];
  userID:any;
  name: string;
 surname: string;
 Bio: string;
 arrupdate=[];

 //derik array
 food =  new Array();
  constructor(public http: HttpClient,public loadingCtrl: LoadingController, public toastCtrl: ToastController,public alertCtrl: AlertController) {
    console.log('Hello ChefsFridgeProvider Provider');
  }
  signIn(email,password){
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
        this.userID = firebase.auth().currentUser.uid;
        resolve() ;
        const loader = this.loadingCtrl.create({
        content:"please wait",
        duration:1000
        });
        loader.present();
       }, (error)=>{
      reject(error)
      })
    })

>>>>>>> 8236c9065b37620f83c322ede1c250a05b7a8995
   }

  SignUp(email ,password ,name ,surname){
    return new Promise((reject, resolve) => {
      //Create a user account with the email and password
      firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
        //add the default image for the user profile
        firebase.storage().ref().child('default profile.png').getDownloadURL().then((url)=>{
          this.url = url;
        })
        //signing the user in
        firebase.auth().signInWithEmailAndPassword(email , password).then(()=>{
          var uid = firebase.auth().currentUser.uid;
          //setting user info in the database
          firebase.database().ref('users/'+uid).set({
            name: name,
            surname: surname,
            email:email,
            image: this.url
          })
          const toast = this.toastCtrl.create({
            message: "Account Created",
            duration: 3000
          });
          toast.present();
          
        }, (error)=>{
        })
      }, (error)=>{
        const toast = this.toastCtrl.create({
          message: error,
          duration: 3000
        });
        toast.present();
      })
    });
  }

  userResetPassword(){
    const prompt = this.alertCtrl.create({
      title: 'Reset password',
      message: "Please enter your email below...",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email address'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Reset',
          handler: data => {
            console.log('email address is ' + data.email);
            this.resetPassword(data.email);
          }
        }
      ]
    });
    prompt.present();
  
  }
<<<<<<< HEAD

  resetPassword(email : any){
    auth.sendPasswordResetEmail(email).then(function() {
    }).catch(function(error) {
      // An error happened.
    });
  } 

  userLogOut(){
    firebase.auth().signOut().then(function(){
      //signout success
      // this.navCtrl.setRoot(SignInPage);
    }).catch(function(error){
      // error occured
    })
  }
=======

  resetPassword(email : any){
    auth.sendPasswordResetEmail(email).then(function() {
     
    }).catch(function(error) {
      // An error happened.
    });
  } 

  userLogOut(){

    firebase.auth().signOut().then(function(){
      //signout success
      
    }).catch(function(error){
      // error occured
    })
  }

  retreiveRecipe(){
    return new Promise((resolve, reject) => {
      firebase.database().ref('recipes/').on('value',(data)=>{
        var recipes = data.val();
        var keys = Object.keys(recipes)
  
        for(var i = 0; i < keys.length; i++){
          var k = keys[i];
         // console.log(keys[i]);
          
          var name = recipes[k].name;
          var description = recipes[k].description
          var category = recipes[k].category
          var sub_category = recipes[k].sub_category
          var ingredients = recipes[k].ingredients
          var methods = recipes[k].directions
          var image = recipes[k].image 
          var likes = recipes[k].likes
  
          let obj = {
            key: k,
            name: name,
            description: description,
            category: category,
            sub_category: sub_category,
            ingredients: ingredients,
            methods: methods,
            image: image,
            likes: likes
          }
    
          
          this.recipe.push(obj);
          resolve(this.recipe);
          
        }
       
    })
    })
    
  }

  retrieveUser(){
    return new Promise((resolve, reject) => {
      var user = firebase.auth().currentUser;
      var userId = user.uid
      firebase.database().ref('users/').child(userId).on('value',(data)=>{
        var userA = data.val();
        console.log(userA);
        
        resolve(userA);
       
    })
    })
      
  }

  retrieveARecipe(key){
    return new Promise((resolve, reject) => {
      firebase.database().ref('recipes/'+key).on('value',(data)=>{
          var recipe = data.val();
          console.log(recipe);
          resolve(recipe);
      })
    })
  }

  itemSearch(category, sub_category, items:any){

    var  commonRecipes = [];
    var ingredients = [];
    var temp = [];
    var temp2 = [];
    var count = 0;
    var searchedrecipe = [];

    return new Promise((resolve, reject) => {
      firebase.database().ref('recipes/').on('value',(data)=>{
        var recipes = data.val();
        var keys = Object.keys(recipes);

        for(var i = 0; i < keys.length; i++){
          var k = keys[i];
          // console.log(k);
          if(recipes[k].category == category && recipes[k].sub_category == sub_category){

            var name = recipes[k].name;
            var description = recipes[k].description
            var ingredients = recipes[k].ingredients
            var methods = recipes[k].directions
            var image = recipes[k].image 

            let obj = {
              key: k,
              name: name,
              description: description,
              ingredients: ingredients,
              methods: methods,
              image: image,
            }
  
            commonRecipes.push(obj);
            // console.log(commonRecipes);
          }
        }
      });

      console.log("new recipe");
      
     console.log(commonRecipes);

     for (let i = 0; i < commonRecipes.length; i++){
      ingredients = commonRecipes[i].ingredients;

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
           for (let j = 0; j < items.length; j++) {
            if(items[j] == temp2[e]){
              count += 1
              console.log("Count "+count);
              console.log('item found');
              if(count <= 1){
                console.log("New search");
                searchedrecipe.push(commonRecipes[i]);
                console.log(searchedrecipe);
                
              }

            }
            
           }   
          }        
        }
      }
    }
    resolve(searchedrecipe);
    });
  }
//update
  updateProfile(name, surname){

    var database = firebase.database();
    var userid = firebase.auth().currentUser.uid;
    if(name != "" && surname != ""){
      // database.ref('users/'+this.userID).update({name: name,surname:surname});
      var update = {
        name: name,
        surname: surname
      }
      return firebase.database().ref('users/' + userid).update(update);
   
    } else if (name != "") {
      var updates = {
        name: name,
      }
      return firebase.database().ref('users/' + userid).update(updates);
   
    } else if (surname != "") {
      var updatess = {
   
        surname: surname
      }
      return firebase.database().ref('users/' + userid).update(updatess);
   
    }
    
 //if statement

//   const prompt = this.alertCtrl.create({
//     title: 'Login',
//     message: "Input Data",
//     inputs: [
 
//       {
//         name: 'Name',
//         placeholder: 'Name'
//       },
//       {
//         name: 'Surname',
//         placeholder: 'Surname'
//       },
//       {
//         name: 'Bio',
//         placeholder: 'Bio'
//       },
 
//     ],
//     buttons: [
//       {
//         text: 'Cancel',
//         handler: data => {
//           console.log('Cancel clicked');
//         }
//       },
//       {
//         text: 'Save',
//         handler: data => {
//           let instance = new  objupdate(data.Bio,data.Name,data.Surname,);
 
//           this.arrupdate.splice(i,1,instance);
//           console.log('Saved');
//         }
//       }
//     ]
//   });
//   prompt.present();
//  }
 
 
  











 
   }

  // likes(key, count){
  //   return new Promise((resolve, reject) => {
  //     firebase.database().ref('recipes/'+key).set({count:count})
  //   })
  // }

  // insertImage(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //     let reader = new FileReader();
  //     reader.onload = (event: any) => {
  //       this.url = event.target.result;
  //     }
  //     reader.readAsDataURL(event.target.files[0]);
  //     console.log(event.target.files);
  //     var selectedfile = event.target.files[0];
  //     var filename = selectedfile.name;
  //     var storageRef = firebase.storage().ref('profilepic/' + filename);
  
  //     var metadata = { contentType: 'image/jpeg', size: 0.75 }
  //     var uploadTask = storageRef.put(selectedfile, metadata);
  
  //    uploadTask.on('state_changed', function (snapshot) {
  
  //     }, function (error) {
  //       // Handle unsuccessful uploads
  //       alert("error !!1");
  //     }, function () {
  //       // Handle successful uploads on complete
  //       alert("successful !!1");
  //       uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
  //         console.log('File available at', downloadURL);
  
  //         firebase.auth().onAuthStateChanged((user) => {
  //           if (user) {
  //             console.log('User has sign in');
  //             var userID = firebase.auth().currentUser.uid;
  //             let obj = {
  //               url: downloadURL
  //             }
  
  //             firebase.database().ref('Pic/' + userID).set({
  //               url: downloadURL
  //             });
  
  //             console.log(userID);
  
  //           }
  //           else {
  //             console.log('User has not sign in');
  //           }
  //         });
  
  //       });
  //     });
  
  //     //});
  //   }
  // }

  


  getSearch(text){
    var arr = [];
   
  return new Promise ((pass,fail) =>{
    firebase.database().ref('recipes/').on('value',(data)=>{
      var recep =  data.val();
      var keys =  Object.keys(recep);
      for (var x = 0; x < keys.length; x++){
        var key = keys[x];
        var  str1 = recep[key].name.substr(0,text.length);
        if (str1 == text){
          console.log(recep[key].name);
          arr.push(recep[key])
          pass(arr)
        }
        
      } 
    
   
    })
  })
  }

>>>>>>> 8236c9065b37620f83c322ede1c250a05b7a8995

  
  getSearch2(){
    var arr = [];
   
  return new Promise ((pass,fail) =>{
    firebase.database().ref('recipes/').on('value',(data)=>{
      var recep =  data.val();
      var keys =  Object.keys(recep);
      for (var x = 0; x < keys.length; x++){
        var key = keys[x];
          arr.push(recep[key])
          pass(arr)
        
        
      } 
    
   
    })
  })
  }

//cheating the code to display as default
  getSearch3(){
    var arr = [];
   
  return new Promise ((pass,fail) =>{
    firebase.database().ref('recipes/').on('value',(data)=>{
      var recep =  data.val();
      var keys =  Object.keys(recep);
      for (var x = 0; x < keys.length; x++){
        var key = keys[x];
          arr.push(recep[key])
          pass(arr)
        
        
      } 
    
   
    })
  })
  }
  }
