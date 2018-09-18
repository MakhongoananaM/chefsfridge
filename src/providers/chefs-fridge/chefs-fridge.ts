import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../../interfaces/user';
import {HomePage} from '../../pages/home/home';
import{objupdate}from '../../pages/profileupdate';
import { ToastController, LoadingController, NavController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';

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
  recipe = [];
  userID:any;
  name: string;
 surname: string;
 Bio: string;
 arrupdate=[];
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

  }
