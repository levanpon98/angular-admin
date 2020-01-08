import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";


@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    uri = "http://localhost:4000";

    constructor(
        private http: HttpClient,
        private helper: JwtHelperService
    ) {
    }

    getListOfProducts() {
        return this.http.get(`${this.uri}/api/product`);
    }

}
