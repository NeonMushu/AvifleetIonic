import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Vehicle } from '../../models/vehicle';

import { AvifleetVehicles } from '../../providers/avifleet-vehicles';

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
}