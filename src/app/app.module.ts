import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { VehiclesPage } from '../pages/vehicles/vehicles';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { VehicleDetailsPage } from '../pages/vehicle-details/vehicle-details';

import { AuthService } from '../providers/auth-service';
import { GithubUsers } from '../providers/github-users';
import { AvifleetVehicles } from '../providers/avifleet-vehicles';

@NgModule({
    declarations: [
        MyApp,
        ProfilePage,
        UsersPage,
        ReposPage,
        OrganisationsPage,
        VehiclesPage,
        UserDetailsPage,
        VehicleDetailsPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ProfilePage,
        UsersPage,
        ReposPage,
        OrganisationsPage,
        VehiclesPage,
        UserDetailsPage,
        VehicleDetailsPage
    ],
    providers: [
        GithubUsers,
        AvifleetVehicles,
        AuthService
    ]
})
export class AppModule { }