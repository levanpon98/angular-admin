import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../services/users.service";

@Component({
    selector: 'app-blacklist',
    templateUrl: './blacklist.component.html',
    styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {

    fatherName = 'Manage Users';
    tilteName = 'Blacklist';
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

    removeFromBlacklist(userID) {
        console.log(userID);
        this.usersService.unlockUserFromBlacklist(userID, 1).then(result => {
            console.log(result);
        })
    }

}
