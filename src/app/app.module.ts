import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { ChefsFridgeProvider } from '../providers/chefs-fridge/chefs-fridge';
import { HttpClientModule } from '@angular/common/http';
import { SignInPage } from '../pages/sign-in/sign-in';
import { AdminPage } from '../pages/admin/admin';
<<<<<<< HEAD
import { Home2Page } from '../pages/home2/home2';
import { ViewPage } from '../pages/view/view';

=======
import {ProfilePage} from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { SearchPage } from '../pages/search/search';
import { CategoryPage } from '../pages/category/category';
import { VegetarianPage } from '../pages/vegetarian/vegetarian';
import { VeganPage } from '../pages/vegan/vegan';
import { MeatloverPage } from '../pages/meatlover/meatlover';
>>>>>>> 8236c9065b37620f83c322ede1c250a05b7a8995


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    SignInPage,
    AdminPage,
<<<<<<< HEAD
    Home2Page,
    ViewPage
=======
    ProfilePage,
    EditProfilePage,
    SearchPage,
    CategoryPage,
    VegetarianPage,
    VeganPage,
    MeatloverPage
>>>>>>> 8236c9065b37620f83c322ede1c250a05b7a8995
  ],
  imports: [
    BrowserModule,HttpClientModule ,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    SignInPage,
    AdminPage,
<<<<<<< HEAD
    Home2Page,
    ViewPage
=======
    ProfilePage,
    EditProfilePage,
    SearchPage,
    CategoryPage,
    VegetarianPage,
    VeganPage,
    MeatloverPage
>>>>>>> 8236c9065b37620f83c322ede1c250a05b7a8995
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChefsFridgeProvider
  ]
})
export class AppModule {}
