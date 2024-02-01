/* eslint-disable  @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, share } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

type TypeConstructor<T> = (value: any) => T;

type NewType = HttpHeaders;

export abstract class BaseApiService {
    protected apiRelativePath = 'https://api.github.com/';

    constructor(protected http: HttpClient) {
    }

    protected httpGet<T>({ url, ctor, options }: { url: string; ctor: TypeConstructor<T>; options?: NewType; }): Observable<any> {
        const request: Observable<any> = this.http.get<T>(`${this.apiRelativePath}${url}`, { observe: 'response', headers: options })
            .pipe(map((result: HttpResponse<T>) => this.mapType<T>(result, ctor)), share());

        request.subscribe(result =>
            this.handleSuccess({ url: `${this.apiRelativePath}${url}`, response: result }),
            this.handleError.bind(this)
        );

        return request;
    }

    private mapType<T>(res: HttpResponse<T>, ctor: TypeConstructor<T>): any {
        const val: null | T = res.status === 204 ? null : res.body;
        if (val === null) {
            return null;
        }

        if (val === '[]') {
            return [];
        }
        if (Array.isArray(val)) {
            return val.map(x => ctor(x));
        }
        return ctor(val);
    }

    private handleError(error: any): void {
        console.error(error._body
            ? error._body
            : error.status
                ? `${error.status} - ${error.statusText}`
                : 'Server error');
    }

    private handleSuccess(data: { url: string, response: object }): void {
        if (environment.production) {
            return;
        }

        console.groupCollapsed(`Success request: ${data.url}`);
        console.dir(data.response);
        console.groupEnd();
    }
}
