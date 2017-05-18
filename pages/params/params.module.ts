import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Params } from './params';

@NgModule({
  declarations: [
    Params,
  ],
  imports: [
    IonicPageModule.forChild(Params),
  ],
  exports: [
    Params
  ]
})
export class ParamsModule {}
