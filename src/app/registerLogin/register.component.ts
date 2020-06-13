import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
}) 

export class RegisterComponent implements OnInit {
  name = 'Hans';
  alterEgo = 'Peter';
  constructor(private UserService: UserService) { } 
    ngOnInit() {
      
  }
  
  onSubmit(){
    console.log("Test");
    var test = 'Hallo';
    var testUser = new User();
    testUser.Benutzername = this.name;
     this.UserService.postUsers(testUser).subscribe(data => {}); 
     //Errorhandling
  }
}
