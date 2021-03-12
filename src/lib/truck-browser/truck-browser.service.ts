import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { BaseResponse } from '../common/http';
import { Truck } from '../truck-browser';

@Injectable({ providedIn: 'root' })
export class TruckBrowserService {
    readonly baseUrl = 'http://localhost:5000/api/trucks';
    constructor(private httpClient: HttpClient) {}

    findTrucks(dayOfWeek: number, time: string): Observable<BaseResponse<Truck[]>> {
        const parameters: string[] = [];
        if (dayOfWeek) {
            parameters.push(`dayOfWeek=${ dayOfWeek }`);
        }
        if (time) {
            parameters.push(`time=${ time }`);
        }
        let paramString: string = '';
        if (parameters.length > 0) {
            paramString = `?${parameters.join('&')}`
        }
        return this.httpClient.get<BaseResponse<Truck[]>>(
            `${ this.baseUrl + paramString }`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }
        );
    }
}