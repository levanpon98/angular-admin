import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../services/users.service";
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-list-of-users',
    templateUrl: './list-of-users.component.html',
    styleUrls: [
        './list-of-users.component.css',
    ]
})
export class ListOfUsersComponent implements OnInit {

    fatherName = 'Manage Users';
    tilteName = 'List of users';
    listOfUsers;

    constructor(
        private usersService: UsersService,
        private toastr: ToastrService,
    ) {

    }

    loadList() {
        this.usersService.getListOfUsers().subscribe(result => {
            this.listOfUsers = result['users'];
        });
    }

    showError(message) {
        this.toastr.error(message, 'Error');
    }

    showSuccess(message) {
        this.toastr.success(message, 'Success');
    }

    ngOnInit() {
        this.loadList()
    }

    moveToBlacklist(userID) {
        this.usersService.blockUser(userID, {status: 0}).subscribe(res => {
            if(res.ok == 1) {
                this.loadList();
                this.showSuccess(res.message);
            } else {
                this.showError(res.error);
            }
        });
    }
}
