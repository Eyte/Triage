import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ambulances } from './ambulances';

@NgModule({
  declarations: [
    Ambulances,
  ],
  imports: [
    IonicPageModule.forChild(Ambulances),
  ],
  exports: [
    Ambulances
  ]
})
export class AmbulancesModule {}
