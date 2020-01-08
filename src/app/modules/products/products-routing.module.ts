import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from "../../guard/auth.guard";
import {ProductsComponent} from "./products.component";
import {NotYetApprovedComponent} from "./not-yet-approved/not-yet-approved.component";
import {ListProductComponent} from "./list-product/list-product.component";


const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            {
                path: 'notYetApproved',
                component: NotYetApprovedComponent,
            },
            {
                path: 'approved',
                component: ListProductComponent,
            },
        ],
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
}
