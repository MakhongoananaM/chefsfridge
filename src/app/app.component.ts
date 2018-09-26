

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignupPage } from '../pages/signup/signup';
import { AdminPage } from '../pages/admin/admin';
import {ProfilePage} from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
<<<<<<< HEAD

=======
import { CategoryPage } from '../pages/category/category';
import { VeganPage } from '../pages/vegan/vegan';
import { VegetarianPage } from '../pages/vegetarian/vegetarian';
import { MeatloverPage } from '../pages/meatlover/meatlover';
>>>>>>> fc01fb4b4aad03b344f777bec012d26eff0b6bd5
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}






