import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Victim } from './victim';

@NgModule({
  declarations: [
    Victim,
  ],
  imports: [
    IonicPageModule.forChild(Victim),
  ],
  exports: [
    Victim
  ]
})
export class VictimModule {}
