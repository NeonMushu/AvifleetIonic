import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Vehicle } from '../../models/vehicle';

import { AvifleetVehicles } from '../../providers/avifleet-vehicles';

declare var google;



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

    @ViewChild('map') mapElement;
    map: any;

    vehicle: Vehicle;
    id: number;
    mapDebug: string;

    constructor(public navCtrl: NavController, private navParams: NavParams, private avifleetVehicles: AvifleetVehicles) {
        this.id = navParams.get('id');
        avifleetVehicles.loadDetails(this.id).subscribe(vehicle => {
            this.vehicle = vehicle;
        })
    }
    // Load map only after view is initialize
    ionViewDidLoad() {
        this.initMap();
    }

    initMap() {
        let latLng = new google.maps.LatLng(-34.9290, 138.6010);

        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }
}
