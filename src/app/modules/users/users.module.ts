import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from "./users-routing.module";

import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { UsersComponent } from './users.component';
import {UsersService} from "../../services/users.service";
import { BlacklistComponent } from './blacklist/blacklist.component';


@NgModule({
    declarations: [
        ListOfUsersComponent,
        UsersComponent,
        BlacklistComponent,
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
    ],
    exports: [
    ],
    providers: [UsersService],
    bootstrap: []
})
export class UsersModule {
}
