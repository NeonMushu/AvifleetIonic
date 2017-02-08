import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Vehicle } from '../../models/vehicle';

import { AvifleetVehicles } from '../../providers/avifleet-vehicles';

/*
  Generated class for the VehicleDetails page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vehicle-details',
  templateUrl: 'vehicle-details.html'
})
export class VehicleDetailsPage {
    vehicle: Vehicle;
    plate_number: string;

    constructor(public navCtrl: NavController, private navParams: NavParams, private avifleetVehicles: AvifleetVehicles) {
        this.plate_number = navParams.get('plate_number');
        avifleetVehicles.loadDetails(this.plate_number).subscribe(vehicle => {
            this.vehicle = vehicle;
        })
    }
}

