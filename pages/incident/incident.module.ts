import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Incident } from './incident';

@NgModule({
  declarations: [
    Incident,
  ],
  imports: [
    IonicPageModule.forChild(Incident),
  ],
  exports: [
    Incident
  ]
})
export class IncidentModule {}
