import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Vehicle } from '../../models/vehicle';

import { AvifleetVehicles } from '../../providers/avifleet-vehicles';

import { VehicleDetailsPage } from '../vehicle-details/vehicle-details';

@Component({
    selector: 'page-vehicles',
    templateUrl: 'vehicles.html'
})
export class VehiclesPage {
    vehicles: Vehicle[]

    constructor(public navCtrl: NavController, private avifleetVehicles: AvifleetVehicles) {
        avifleetVehicles.load().subscribe(vehicles => {
            this.vehicles = vehicles;
        })
    }
    goToDetails(plate_number: string) {
        this.navCtrl.push(VehicleDetailsPage, { plate_number });
    }
}
