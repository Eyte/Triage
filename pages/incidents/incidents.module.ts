import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Incidents } from './incidents';

@NgModule({
  declarations: [
    Incidents,
  ],
  imports: [
    IonicPageModule.forChild(Incidents),
  ],
  exports: [
    Incidents
  ]
})
export class IncidentsModule {}
