import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ColorModel } from '../models/color.model';

@Injectable()
export class ColorsService {
    constructor(protected http: HttpClient) {
    }

    getColorsForLanguages(): Observable<Map<string, ColorModel>> {
        return this.http.get<object>('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json')
        .pipe(map((result: object) => new Map<string, ColorModel>(Object.entries(result))));
    }
}
