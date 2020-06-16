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
    
    var newUser = new User();
    newUser.Benutzername = this.benutzername;
    newUser.Email = this.email;
    newUser.Passwort = this.password;
    newUser.Vorname = this.vorname;
    newUser.Nachname = this.nachname;

    console.log(newUser);
     this.UserService.postUsers(newUser).subscribe(data => {}); 
     //Errorhandling
  }
}
