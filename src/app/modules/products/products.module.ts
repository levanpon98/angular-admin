import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from "./products.component";
import {ProductsRoutingModule} from "./products-routing.module";
import { NotYetApprovedComponent } from './not-yet-approved/not-yet-approved.component';
import {SharedModule} from '../shared/shared.module';
import { ListProductComponent } from './list-product/list-product.component';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
    declarations: [
        ProductsComponent,
        NotYetApprovedComponent,
        ListProductComponent,

    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule,
        ToastrModule.forRoot()
    ],
    exports: [],
    providers: [],
    bootstrap: []
})
export class ProductsModule {
}
