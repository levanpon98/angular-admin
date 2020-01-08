import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    uri = "http://localhost:4000";

    constructor(private http: HttpClient,
                private helper: JwtHelperService
    ) {
    }

    getListOfUsers() {
        return this.http.get(`${this.uri}/api/user`);
    }




}
