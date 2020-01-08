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

    approve(id) {
        return this.http.patch(`${this.uri}/api/product/approve/` + id, {});
    }

    notApprove(id) {
        return this.http.patch(`${this.uri}/api/product/not-approve/` + id, {});
    }
}
