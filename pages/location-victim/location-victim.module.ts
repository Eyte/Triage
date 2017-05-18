import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationVictim } from './location-victim';

@NgModule({
  declarations: [
    LocationVictim,
  ],
  imports: [
    IonicPageModule.forChild(LocationVictim),
  ],
  exports: [
    LocationVictim
  ]
})
export class LocationVictimModule {}
