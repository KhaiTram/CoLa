import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
}) 

export class RegisterComponent implements OnInit {
  name = '';
  benutzername = '';
  email = '';
  password = '';
  vorname = '';
  nachname = '';

  constructor(private UserService: UserService) { } 
    ngOnInit() {
      
  }
  
  onSubmit(){
    console.log("Test");
    var testUser = new User();
    testUser.Benutzername = this.benutzername;
    testUser.Email = this.email;
    testUser.Passwort = this.password;
    testUser.Vorname = this.vorname;
    testUser.Nachname = this.nachname;


     this.UserService.postUsers(testUser).subscribe(data => {}); 
     //Errorhandling
  }
}
