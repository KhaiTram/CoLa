import { Component, OnInit } from '@angular/core';
import { UserService } from './User.service';

@Component({
    selector: 'user-list',
    templateUrl: './user.component.html',
})


export class UserComponent implements OnInit {

    users = [];
    constructor(private UserService: UserService) { }

    ngOnInit() {
        this.UserService.getUsers()
        .subscribe(data => this.users = data);
        console.log(this.users);
    }


}