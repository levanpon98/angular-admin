import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ListOfUsersComponent} from "./list-of-users/list-of-users.component";
import {UsersComponent} from "./users.component";
import {AuthGuard} from "../../guard/auth.guard";
import {BlacklistComponent} from "./blacklist/blacklist.component";

const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: 'listOfUsers',
                component: ListOfUsersComponent,
            },
            {
                path: 'blacklist',
                component: BlacklistComponent,
            },
        ],
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
