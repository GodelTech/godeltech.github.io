import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService } from './base-api.service';
import { RepositoryModel } from '../models/repository.model';

@Injectable()
export class ApiService extends BaseApiService {
    constructor(protected override http: HttpClient) {
        super(http);

    }
    getRepositoryList(): Observable<RepositoryModel[]> {
        return this.httpGet({ url: 'orgs/godeltech/repos?per_page=100', ctor: x => new RepositoryModel(x) });
    }
}
