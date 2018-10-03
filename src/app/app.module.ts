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
import {ProfilePage} from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { SearchPage } from '../pages/search/search';
import { CategoryPage } from '../pages/category/category';
import { VegetarianPage } from '../pages/vegetarian/vegetarian';
import { VeganPage } from '../pages/vegan/vegan';
import { MeatloverPage } from '../pages/meatlover/meatlover';
import { ViewRecipePage } from '../pages/view-recipe/view-recipe';
import { ResultsPage } from '../pages/results/results';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    SignInPage,
    AdminPage,
    ProfilePage,
    EditProfilePage,
    SearchPage,
    CategoryPage,
    VegetarianPage,
    VeganPage,
    MeatloverPage,
    ViewRecipePage,
    ResultsPage
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
    ProfilePage,
    EditProfilePage,
    SearchPage,
    CategoryPage,
    VegetarianPage,
    VeganPage,
    MeatloverPage,
    ViewRecipePage,
    ResultsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChefsFridgeProvider
  ]
})
export class AppModule {}
