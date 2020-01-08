import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from "./products.component";
import {ProductsRoutingModule} from "./products-routing.module";
import { NotYetApprovedComponent } from './not-yet-approved/not-yet-approved.component';


@NgModule({
    declarations: [
        ProductsComponent,
        NotYetApprovedComponent,

    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,

    ],
    exports: [],
    providers: [],
    bootstrap: []
})
export class ProductsModule {
}
