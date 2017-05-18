import { Component } from '@angular/core';

import { Incidents } from '../incidents/incidents';
import { Ambulances } from '../ambulances/ambulances';
import { Info } from '../info/info';
import { Cards } from '../cards/cards'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Incidents;
  tab2Root = Ambulances;
  tab3Root = Cards;
  tab4Root = Info;

  constructor() {

  }
}
