import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {UserService} from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit
 {
  text = "Login";
  newUser :User = {
    Benutzername: '',
    Email: '',
    Vorname: '',
    Nachname: '',
    Passwort: ''
  };

  
  constructor( private AuthService: AuthService, private userService: UserService) { }

  //This function gets called first and automatically after the page is loaded
  ngOnInit(): void 
  {
    //A call to the AuthService to start gathering the later needed data from the database
    this.AuthService.subcribeToData();
    //As this is an asynchron operation the simplest solution to enable functioning as intended, is to delay this function till the data is received.
    setTimeout(() => {this.cookieLogin() }, 500);
  }

  //A debug function to post the current user
  public getCurrentUser()
  {
    console.log(this.AuthService.getCurrentUser());
  }

  //This function gathers the username and password entered on the html page, passes them along to the AuthService
  //and depending on the outcome does update the html page to show a login and creates a cookie or does nothing but
  //alert an unsuccessful login attempt
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
      window.location.reload()
    }
    else
    {
      alert("Username oder Passwort falsch")
    }  
  }

  //Reading the username from a trusted cookie and attempts a login
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

  ChangePassword(){
    if (this.newUser.Email === this.AuthService.getCurrentUser().Email){
    this.userService.putUsers(this.newUser).subscribe(data => {})
    alert("Passwort geändert"); 
    }
    else {
      alert("ungültige Eingabe"); 
    }
  }

  //The logout function resets the page to its logout state and marks the cookie as expired, for good measure the site is then reloaded
  public logout()
  {
    this.AuthService.logout();
    this.text = "Login";
    var currentCoockie = document.cookie;
    document.cookie = currentCoockie + "; expires=Thu, 01 Jan 1970 00:00:00 UTC" 
    location.reload();
  }

  //This is a go between the logout function and the logout/login button just in case the need arises to call upon the logout function directly
  public logButton()
  {
    if(this.AuthService.getLoginStatus())
    {
      this.logout();
    }
  }

}
