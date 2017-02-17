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
    goToDetails(id: number) {
        this.navCtrl.push(VehicleDetailsPage, { id });
    }

    search(searchEvent) {
        let term = searchEvent.target.value
        // We will only perform the search if we have 3 or more characters
        this.avifleetVehicles.searchVehicles(term).subscribe(vehicles => {
            this.vehicles = vehicles
        });
    }
}
