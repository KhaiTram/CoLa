import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{
  public users = [];
  public activeUser = "Empty";
  
  constructor(private UserService: UserService, private AuthService: AuthService) { }

  ngOnInit() 
  {
    this.UserService.getUsers().subscribe(data => this.users = data);
    console.log(this.activeUser);
  }

  public getCurrentUser()
  {
    this.activeUser = this.AuthService.getCurrentUser();
    console.log(this.activeUser);
  }

  public login()
  {
    
    const loginElement = <HTMLInputElement> document.getElementById("loginField");
    const passwordElement = <HTMLInputElement> document.getElementById("pswField");
    var username = loginElement.value;
    var password = passwordElement.value;
    var auth = false;

    auth = this.AuthService.authenticateLogin(username, password);

    if(auth)
    {
      alert("Erfolgreicher Login")
    }
    else
    {
      alert("Username oder Passwort falsch")
    }  
  }
}
