import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppSettings } from './../app.settings';

@Injectable()
export class ProjectService {

    constructor(private http: Http) { }

    getRepositories(): Observable<any>{
        return this.http.get(AppSettings.GITURL).map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response) {
        if (res.status == 200) {
            let body = res.json(); // parse into a JavaScript object
            return body;
        }
        else {
            console.error('ERROR: Could not retrieve data; Status = ' + res.status);
            return "";
        }
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${ error.status } - ${ error.statusText}` : 'Box token: Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
