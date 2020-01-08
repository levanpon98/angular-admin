import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../services/users.service";

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
    ) {

    }

    ngOnInit() {
        this.usersService.getListOfUsers().subscribe(result => {
            this.listOfUsers = result['users'];
            console.log(this.listOfUsers);
        });

    }



}
