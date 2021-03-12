import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { BaseResponse } from '../common/http';
import { Truck } from '../truck-browser';

@Injectable({ providedIn: 'root' })
export class TruckBrowserService {
    readonly baseUrl: string = 'http://localhost:5000/api/trucks';
    constructor(private httpClient: HttpClient) {}

    findTrucks(dayOfWeek: number, time: string): Observable<BaseResponse<Truck[]>> {
        let parameters = new HttpParams();
        if (dayOfWeek) {
            parameters = parameters.append("dayOfWeek", dayOfWeek.toString());
        }
        if (time) {
            parameters = parameters.append("time", time);
        }
        return this.httpClient.get<BaseResponse<Truck[]>>(
            `${ this.baseUrl}?${ parameters.toString() }`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                }),
                params: parameters
            }
        )
    }
}