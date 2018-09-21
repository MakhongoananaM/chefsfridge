import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VeganPage } from './vegan';

@NgModule({
  declarations: [
    VeganPage,
  ],
  imports: [
    IonicPageModule.forChild(VeganPage),
  ],
})
export class VeganPageModule {}
