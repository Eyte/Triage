import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { IncidentsData } from "../../services/incidentsdata";
import {SetLocation} from "../set-location/set-location";
import { Location } from "../../models/location";

@IonicPage()
@Component({
  selector: 'page-new-incident',
  templateUrl: 'new-incident.html',
})
export class NewIncident {
  location: Location= {
    lat:51.106793,
    lng:4.371957
  };
  locationIsSet = false;

  constructor(private idData: IncidentsData, public navCtrl: NavController, public ModalCtrl: ModalController){

  }


  onAddItem(form: NgForm){
    this.idData.addItem(form.value.IncidentName,
                        form.value.IncidentLocation,
                        form.value.Location,
                        form.value.Info,
                        form.value.Time);

    form.reset();this.navCtrl.pop();
  }
 onOpenMap(){
   const modal=this.ModalCtrl.create(SetLocation, {location: this.location,
   isSet: this.locationIsSet});
   modal.present();
   modal.onDidDismiss(
     data => {
       if (data){
         this.location =data.location;
         this.locationIsSet = true;
       }
     }
   )
 }
}
