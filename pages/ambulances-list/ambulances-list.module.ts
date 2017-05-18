import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmbulancesList } from './ambulances-list';

@NgModule({
  declarations: [
    AmbulancesList,
  ],
  imports: [
    IonicPageModule.forChild(AmbulancesList),
  ],
  exports: [
    AmbulancesList
  ]
})
export class AmbulancesListModule {}
