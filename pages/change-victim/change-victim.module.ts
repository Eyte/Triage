import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeVictim } from './change-victim';

@NgModule({
  declarations: [
    ChangeVictim,
  ],
  imports: [
    IonicPageModule.forChild(ChangeVictim),
  ],
  exports: [
    ChangeVictim
  ]
})
export class ChangeVictimModule {}
