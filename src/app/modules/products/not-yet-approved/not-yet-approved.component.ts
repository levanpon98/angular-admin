import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../services/products.service";

@Component({
    selector: 'app-not-yet-approved',
    templateUrl: './not-yet-approved.component.html',
    styleUrls: ['./not-yet-approved.component.css']
})
export class NotYetApprovedComponent implements OnInit {
    fatherName = 'Manage Products';
    tilteName = 'List of not yet approved products';
    listOfProducts;

    constructor(
        private productsService: ProductsService,

    ) {
    }

    ngOnInit() {
        this.productsService.getListOfProducts().subscribe(result => {
            this.listOfProducts = result['products'];
            console.log(this.listOfProducts);
        });
    }

}
