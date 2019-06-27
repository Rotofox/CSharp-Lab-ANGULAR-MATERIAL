import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RootService {
    // private expensesSubject: BehaviorSubject<any>;
    public expenses: any;
    public users: any;
    public userRole: any;


    constructor(private http: HttpClient) {
        // this.expensesSubject = new BehaviorSubject<any>(null);
    }

    getAllExpenses(x: number): Observable<any> {
        x = x + 1;
        // const from = ;
        // const to = ;
        return this.http.get<any>(
            `https://localhost:44303/api/Expenses?page=` + x);
    }

    getAllUsers(): Observable<any> {
        return this.http.get<any>(
            `https://localhost:44303/api/users`);
    }

    getAllUserRoles(): Observable<any> {
        return this.http.get<any>(
            `https://localhost:44303/api/role`);
    }

    getAllHistory(x: number): Observable<any> {
        return this.http.get<any>(
            `https://localhost:44303/api/history/` + x);
    }

    getAllCommentsAndFilter(filter): Observable<any> {
        const url = `${`https://localhost:44303/api/comments?filter=`}${filter}`;
        return this.http.get<any>(url,filter)
    }
}