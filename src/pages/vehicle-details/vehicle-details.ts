import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Vehicle } from '../../models/vehicle';

import { AvifleetVehicles } from '../../providers/avifleet-vehicles';

import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, CameraPosition, GoogleMapsMarkerOptions, GoogleMapsMarker } from 'ionic-native';

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
    id: number;

    constructor(public navCtrl: NavController, private navParams: NavParams, private avifleetVehicles: AvifleetVehicles) {
        this.id = navParams.get('id');
        avifleetVehicles.loadDetails(this.id).subscribe(vehicle => {
            this.vehicle = vehicle;
        })
    }
    // Load map only after view is initialize
    ngAfterViewInit() {
        this.loadMap();
    }

    loadMap() {
        // make sure to create following structure in your view.html file
        // and add a height (for example 100%) to it, else the map won't be visible
        // <ion-content>
        //  <div #map id="map" style="height:100%;"></div>
        // </ion-content>

        // create a new map by passing HTMLElement
        let element: HTMLElement = document.getElementById('map');

        let map = new GoogleMap(element);

        // listen to MAP_READY event
        map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));

        // create LatLng object
        let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904, -89.3809802);

        // create CameraPosition
        let position: CameraPosition = {
            target: ionic,
            zoom: 18,
            tilt: 30
        };

        // move the map's camera to position
        map.moveCamera(position);

        // create new marker
        let markerOptions: GoogleMapsMarkerOptions = {
            position: ionic,
            title: 'Ionic'
        };

        map.addMarker(markerOptions)
            .then((marker: GoogleMapsMarker) => {
                marker.showInfoWindow();
            });
    }
}

