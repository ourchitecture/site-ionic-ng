import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ContentService {

    constructor(private http: HttpClient) {
    }

    async get(name: string, path: string = '') {

        if (path.length > 0 && !path.startsWith('/')) {
            throw new Error('Path should start with /');
        }

        const url = `./assets/content${path}/${name}.txt`;

        return await this.http.get(url, { responseType: 'text' }).toPromise();
    }
}
