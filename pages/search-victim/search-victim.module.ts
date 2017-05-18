import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchVictim } from './search-victim';

@NgModule({
  declarations: [
    SearchVictim,
  ],
  imports: [
    IonicPageModule.forChild(SearchVictim),
  ],
  exports: [
    SearchVictim
  ]
})
export class SearchVictimModule {}
