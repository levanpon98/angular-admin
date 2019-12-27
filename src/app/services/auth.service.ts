import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {throwError} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    uri = "http://localhost:4000";
    constructor(private http: HttpClient,
                private helper: JwtHelperService
                ) {
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

    login(value) {
        return this.http.post(`${this.uri}/api/admin/login`, value);
    }

    get loggedInStatus(): boolean {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            return true;
        }
        return false;
    }

    logout() {
        this.removeSession();
    }

    removeSession() {
        localStorage.clear();
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    getTokenExpirationDate(token: string): Date {
        const decoded = this.helper.decodeToken(token);

        if (decoded.exp === undefined) return null;

        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    isTokenExpired(token?: string): boolean {
        if(!token) token = this.getToken();
        if(!token) return true;

        const date = this.getTokenExpirationDate(token);
        if(date === undefined) return false;
        return !(date.valueOf() > new Date().valueOf());
    }

}
