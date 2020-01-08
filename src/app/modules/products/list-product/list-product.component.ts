import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../services/products.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  fatherName = 'Manage Products';
  tilteName = 'List of approved products';
  listOfProducts;


  constructor(
    private productsService: ProductsService,
  ) { }

  loadProduct() {
    this.productsService.getListOfProducts().subscribe(result => {
        this.listOfProducts = result['products'];
    });
}
ngOnInit() {
    this.loadProduct();
}
}
