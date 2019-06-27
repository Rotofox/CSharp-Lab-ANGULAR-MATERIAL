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

        // return this.http.get<any>(`https://localhost:44303/api/Expenses/`)
        //     .pipe(map(response => {
        //         this.expenses = response;
        //         this.expensesSubject.next(this.expenses);
        //         return response;
        //     }));
    }

    getAllUsers(): Observable<any> {
        return this.http.get<any>(
            `https://localhost:44303/api/users`);

        // return this.http.get<any>(`https://localhost:44303/api/users`)
        //     .pipe(map(response => {
        //         this.users = response;
        //         this.usersSubject.next(this.users);
        //         return response;
        //     }));
    }

    getAllUserRoles(): Observable<any> {
        return this.http.get<any>(
            `https://localhost:44303/api/userRoles`);

        // return this.http.get<any>(`https://localhost:44303/api/users`)
        //     .pipe(map(response => {
        //         this.users = response;
        //         this.usersSubject.next(this.users);
        //         return response;
        //     }));
    }
}