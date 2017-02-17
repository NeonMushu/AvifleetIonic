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

    }
    // Load map only after view is initialize
    ionViewDidLoad() {
        this.id = this.navParams.get('id');
        this.avifleetVehicles.loadDetails(this.id).subscribe(vehicle => {
            this.vehicle = vehicle;
            this.initMap(vehicle.latitude, vehicle.longitude);
        })
    }

    initMap(latitude: number, longitude: number) {
        let latLng = new google.maps.LatLng(latitude, longitude);

        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
    }

}
