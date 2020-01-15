import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Criminal } from '../criminals.model';
import { EventEmitter } from 'protractor';
import { Details } from '../details.model';

@Injectable({
    providedIn: 'root',
})

export class CriminalService {
    private URL = 'http://localhost:60542/api/criminal';

    constructor(private http: HttpClient) { }

    loadCriminals(): Observable<Criminal[]> {
        return this.http.get<Criminal[]>(this.URL);
    }

    getCriminal(id: number): Observable<Criminal> {
        return this.http.get<Criminal>(`${this.URL}`);
    }

    createCriminal(newCriminal: Criminal): Observable<any> {
        console.log(newCriminal, `${this.URL}/add`)
        return this.http.post<any>(`${this.URL}/add`, newCriminal);
    }

    updateCriminal(criminal: Criminal): Observable<Criminal> {
        return this.http.patch<Criminal>(`${this.URL}`, criminal);
    }

    deleteCriminal(id: number): Observable<any> {
        console.log(id);
        const options = {
            header: new HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Headers": "Content-Type"
            }),
            params: {
                id: '' + id
            }
        }
        return this.http.delete(`${this.URL}/delete`, options);
    }

    getDetails(id: number): Observable<any> {
        const options = {
            header: new HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Headers": "Content-Type"
            }),
            params: {
                id: '' + id
            }
        }
        return this.http.get(`${this.URL}/getInformation`, options);
    }
}