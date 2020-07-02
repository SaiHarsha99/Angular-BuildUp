import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Person } from './person';

@Injectable()
export class PersonService {
   
    persons: any = [];
    datatype = 'persData';
    username: string;

    constructor(private http: HttpClient) { }

    // Makes a get request to backend to fetch Persons data
    getPersonsdata(): Observable<Person[]> {
        if (this.datatype === 'persData') {           
            return this.http.get<Person[]>('./assets/persons/persData.json').pipe(
                catchError(this.handleError));
        } else if (this.datatype === 'profData') {
            return this.http.get<Person[]>('./assets/persons/profData.json').pipe(
                catchError(this.handleError));
        }
    }

    // Error Handling code
    private handleError(err: HttpErrorResponse) {
        console.log(err);
        return Observable.throw(err.error() || 'Server error');
    }
}
