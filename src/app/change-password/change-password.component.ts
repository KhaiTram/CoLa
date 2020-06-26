import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  newUser :User = {
    Benutzername: '',
    Email: '',
    Vorname: '',
    Nachname: '',
    Passwort: ''
  };

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
  }

  ChangePassword(){
    this.UserService.putUsers(this.newUser).subscribe(data => {}); 
  }

  onClose() {
    document.getElementById('modal').style.display = "none";
  };
}
