import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../services/products.service";
import { ToastrService } from 'ngx-toastr';

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
        private toastr: ToastrService,
    ) {
    }

    showError(message) {
        this.toastr.error(message, 'Error');
    }

    showSuccess(message) {
        this.toastr.success(message, 'Success');
    }


    loadProduct() {
        this.productsService.getListOfProducts().subscribe(result => {
            this.listOfProducts = result['products'];
        });
    }
    ngOnInit() {
        this.loadProduct();
    }

    approveProduct(id) {
        this.productsService.approve(id).subscribe(res => {
            if(res.ok == 1) {
                this.loadProduct();
                this.showSuccess(res.message);
            } else {
                this.showError(res.error);
            }
        });
    }

    notApproveProduct(id) {
        this.productsService.notApprove(id).subscribe(res => {
            if(res.ok == 1) {
                this.loadProduct();
                this.showSuccess(res.message);
            } else {
                this.showError(res.error);
            }
        });
    }
}
