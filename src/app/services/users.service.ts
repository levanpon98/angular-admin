import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Observable} from "rxjs";
import {reject, resolve} from "q";

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

    unlockUserFromBlacklist(userID, status): Promise<any> {
        console.log(status);
        return new Promise((resolve, reject) => {
            console.log("Khoa cho");
            this.http.patch(`${this.uri}/api/user/unblock-user/` + userID, status);
            console.log("Khoa cho rach");
        }).then(
            (result) => {console.log(result + "2222222");}
        );


    }




}
