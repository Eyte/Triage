import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListAParks } from './list-a-parks';

@NgModule({
  declarations: [
    ListAParks,
  ],
  imports: [
    IonicPageModule.forChild(ListAParks),
  ],
  exports: [
    ListAParks
  ]
})
export class ListAParksModule {}
