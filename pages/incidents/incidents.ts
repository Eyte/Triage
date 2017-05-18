import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewIncident } from '../new-incident/new-incident';
import { InciDent } from '../../models/incidents';
import { IncidentsData } from "../../services/incidentsdata";
import { Incident } from '../incident/incident';

@IonicPage()
@Component({
  selector: 'page-incidents',
  templateUrl: 'incidents.html',
})
export class Incidents {
  listItems: InciDent[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private idData: IncidentsData) {
  }

ionViewWillEnter() {
    this.listItems = this.idData.getItems()
  };
  onload(){
    this.navCtrl.push(NewIncident)
  };
  gotoIncidentPage() {
  this.navCtrl.push(Incident)
  }

}
