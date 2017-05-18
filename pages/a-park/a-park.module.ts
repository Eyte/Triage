import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { APark } from './a-park';

@NgModule({
  declarations: [
    APark,
  ],
  imports: [
    IonicPageModule.forChild(APark),
  ],
  exports: [
    APark
  ]
})
export class AParkModule {}
