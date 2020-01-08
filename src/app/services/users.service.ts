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

    unlockUserFromBlacklist(userID, status){
      return this.http.patch(`${this.uri}/api/user/unblock-user/` + userID, status);
    }

    blockUser(id, status) {
        return this.http.patch(`${this.uri}/api/user/block-user/` + id, status);
      }
}
