import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Criminal } from '../criminals.model';
import { Prison } from '../prison.model';

@Injectable({
    providedIn: 'root',
})

export class PrisonService {
    private URL = 'http://localhost:3001/prisons';

    constructor(private http: HttpClient) { }

    loadPrison(): Observable<Prison[]> {
        return this.http.get<Prison[]>(this.URL);
    }

    addRelationship(criminalID: string, prisonID: string): Observable<Boolean> {
        return this.http.post<Boolean>(this.URL, { criminalID, prisonID });
    }
}