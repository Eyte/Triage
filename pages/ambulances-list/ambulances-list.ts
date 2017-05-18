import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InciDent } from '../../models/incidents';
import { IncidentsData } from "../../services/incidentsdata";
import { NewIncident } from '../new-incident/new-incident';

@IonicPage()
@Component({
  selector: 'page-ambulances-list',
  templateUrl: 'ambulances-list.html',
})
export class AmbulancesList {
  listItems: InciDent[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private idData: IncidentsData) {
  }

  ionViewDidLoad() {
      this.listItems = this.idData.getItems();
    }

    onload(){
      this.navCtrl.push(NewIncident)
    }

}
