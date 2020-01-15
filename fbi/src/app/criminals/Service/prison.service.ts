import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Criminal } from '../criminals.model';
import { Prison } from '../prison.model';

@Injectable({
    providedIn: 'root',
})

export class PrisonService {
    private URL = 'http://localhost:60542/api/prison';
    private URL1 = 'http://localhost:60542/api/criminal/addPrisoner';

    constructor(private http: HttpClient) { }

    loadPrison(): Observable<Prison[]> {
        return this.http.get<Prison[]>(this.URL);
    }

    addRelationship(criminalId: number, prisonId: number, dateFrom: string, dateTo: string): Observable<Boolean> {
        return this.http.post<Boolean>(this.URL1, { criminalId, prisonId, dateFrom, dateTo });
    }
}