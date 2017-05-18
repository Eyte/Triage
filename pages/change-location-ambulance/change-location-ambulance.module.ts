import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeLocationAmbulance } from './change-location-ambulance';

@NgModule({
  declarations: [
    ChangeLocationAmbulance,
  ],
  imports: [
    IonicPageModule.forChild(ChangeLocationAmbulance),
  ],
  exports: [
    ChangeLocationAmbulance
  ]
})
export class ChangeLocationAmbulanceModule {}
