import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Crime } from '../crime.model';

@Injectable({
    providedIn: 'root',
})

export class CrimeService {
    private URL = 'http://localhost:60542/api/crime';
    private URL1 = 'http://localhost:60542/api/criminal/addCommited';

    constructor(private http: HttpClient) { }

    loadCrime(): Observable<Crime[]> {
        return this.http.get<Crime[]>(this.URL);
    }

    addRelationship(criminalId: number, crimeName: string, caution: string): Observable<Boolean> {
        console.log(criminalId);
        console.log(crimeName);
        console.log(caution);


        return this.http.post<Boolean>(this.URL1, { criminalId, crimeName, caution });
    }
}