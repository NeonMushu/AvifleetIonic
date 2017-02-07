// Vehicle model
// http://sandbox.avifleet.co.za/api/v1/vehicles
export interface Vehicle {
    id: number;
    avatar_url: string;
    plate_number: string;
    fleet_id: number;
    fleet_number: number;
    vin: number;
    engine_number: number;
    year: number;
    description: string;
    make: string;
    series: string;
    color: string;
    fuel_type: string;
    tank_volume: number;
    van_capacity: number;
    status_id: number;
    created_at: number;
    updated_at: number;
    cost_center_id: number;
    slug: string;
    device_id: string;
    driver_id: number;
    engine_displacement: string;
    stroke_efficiency: number;
    average_consumption_urban: number;
    average_consumption_freeway: number;
    contract_start_on: number;
    contract_km: number;
    contract_months: number;

}
