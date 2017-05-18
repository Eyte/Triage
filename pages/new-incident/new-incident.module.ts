import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewIncident } from './new-incident';

@NgModule({
  declarations: [
    NewIncident,
  ],
  imports: [
    IonicPageModule.forChild(NewIncident),
  ],
  exports: [
    NewIncident
  ]
})
export class NewIncidentModule {}
