import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../services/users.service";
import { ToastrService } from 'ngx-toastr';

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

    removeFromBlacklist(userID) {
        console.log(userID);
        this.usersService.unlockUserFromBlacklist(userID, {status: 1}).subscribe(res => {
            if(res.ok == 1) {
                this.loadList();
                this.showSuccess(res.message);
            } else {
                this.showError(res.error);
            }
        });
    }

}
