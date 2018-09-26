import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewRecipePage } from './view-recipe';

@NgModule({
  declarations: [
    ViewRecipePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewRecipePage),
  ],
})
export class ViewRecipePageModule {}
