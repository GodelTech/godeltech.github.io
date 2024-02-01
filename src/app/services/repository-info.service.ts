import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RepositoryInfoService {
    constructor(protected http: HttpClient) {
    }

    getInfoArray<T>(url: string): Observable<T[]> {
        return this.http.get<T[]>(url);
    }

    getInfoMap<T>(url: string): Observable<Map<string, T>> {
        return this.http.get<object>(url)
        .pipe(map((result: object) => new Map<string, T>(Object.entries(result))));
    }
}
