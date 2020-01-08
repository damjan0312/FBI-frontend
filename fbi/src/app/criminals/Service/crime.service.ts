import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Crime } from '../crime.model';

@Injectable({
    providedIn: 'root',
})

export class CrimeService {
    private URL = 'http://localhost:3001/crime';

    constructor(private http: HttpClient) { }

    loadPrison(): Observable<Crime[]> {
        return this.http.get<Crime[]>(this.URL);
    }

    addRelationship(criminalID: string, crimeID: string): Observable<Boolean> {
        return this.http.post<Boolean>(this.URL, { criminalID, crimeID });
    }
}