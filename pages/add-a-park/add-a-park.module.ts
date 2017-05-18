import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAPark } from './add-a-park';

@NgModule({
  declarations: [
    AddAPark,
  ],
  imports: [
    IonicPageModule.forChild(AddAPark),
  ],
  exports: [
    AddAPark
  ]
})
export class AddAParkModule {}
