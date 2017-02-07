import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Vehicle } from '../models/vehicle';

@Injectable()
export class AvifleetVehicles {
    AvifleetUrl = 'http://sandbox.avifleet.co.za/api/v1';

    constructor(public http: Http) { }

    // Load all Avifleet vehicles
    load(): Observable<Vehicle[]> {
        return this.http.get(`${this.AvifleetUrl}/vehicles`)
            .map(res => <Vehicle[]>res.json());
    }
}