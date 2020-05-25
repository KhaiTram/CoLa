import { Component, OnInit } from '@angular/core';
import { UserService } from '../User.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


   users = [];
  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.UserService.getUsers()
      .subscribe(data => this.users = data);
    console.log(this.users);
  }


}

