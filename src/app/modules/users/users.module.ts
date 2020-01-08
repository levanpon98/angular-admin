import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from "./users-routing.module";
import {ToastrModule} from 'ngx-toastr';

import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { UsersComponent } from './users.component';
import {UsersService} from "../../services/users.service";
import { BlacklistComponent } from './blacklist/blacklist.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [
        ListOfUsersComponent,
        UsersComponent,
        BlacklistComponent,
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
        ToastrModule.forRoot()
    ],
    exports: [
    ],
    providers: [UsersService],
    bootstrap: []
})
export class UsersModule {
}
