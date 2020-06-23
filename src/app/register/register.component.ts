import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
}) 

export class RegisterComponent implements OnInit {
  
  newUser :User = {
    Benutzername: '',
    Email: '',
    Vorname: '',
    Nachname: '',
    Passwort: ''
  };

  show = true;

  constructor(private UserService: UserService) { } 
    ngOnInit() { 
  }
  
  onSubmit(){
    this.UserService.postUsers(this.newUser).subscribe(data => {}); 
    this.show = !this.show;
  }
}
