import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit
 {
  text = "Login";
  
  constructor( private AuthService: AuthService) { }

  ngOnInit(): void 
  {
    this.AuthService.subcribeToData();
    setTimeout(() => {this.cookieLogin() }, 1000);
  }

  public getCurrentUser()
  {
    console.log(this.AuthService.getCurrentUser());
  }

  public login()
  {      
    const loginElement = <HTMLInputElement> document.getElementById("loginNameField");
    const passwordElement = <HTMLInputElement> document.getElementById("pswField");
    var username = loginElement.value;
    var password = passwordElement.value;
    var auth = false;
    console.log(username);
    console.log(password);

    auth = this.AuthService.authenticateLogin(username, password);

    if(auth)
    {
      alert("Erfolgreicher Login")
      document.cookie = "username="+username; 
      this.text = "Logout";
    }
    else
    {
      alert("Username oder Passwort falsch")
    }  
  }

  public cookieLogin()
  {
    var coockieName = document.cookie;
    var realName = coockieName.split('=')[1];
    console.log(coockieName);
    console.log(realName);
    if(this.AuthService.nameLookUp(realName))
    {
      console.log("User logged in");
      this.text = "Logout";
    }
    else
    {
      console.log("No User logged in")
    }
  }

  public logout()
  {
    this.AuthService.logout();
    this.text = "Login";
    var currentCoockie = document.cookie;
    document.cookie = currentCoockie + "; expires=Thu, 01 Jan 1970 00:00:00 UTC" 
    location.reload();
  }

  public logButton()
  {
    if(this.AuthService.getLoginStatus())
    {
      this.logout();
    }
  }

}
