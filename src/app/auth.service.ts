import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public users = [];
  public legitUser;
  public loginStatus = false;
  constructor(private UserService: UserService) { }

  //To avoid invalid comparsions this method enables the service to subscribe to the needed database data as early as possible 
  subcribeToData()
  {
    this.UserService.getUsers().subscribe(data => this.users = data);
  }

  //The passed name and password pair are checked agains all other credentials within the database.
  //In case of a match the user is saved as a legitUser and the login status is set to true, the return value then is true
  //If no match is found nothing happens and da false is returned
  authenticateLogin(name,password)
  {
     
    for(let user of this.users)
    {
      if(name === user.Benutzername)
      {
        if(password === user.Passwort)
        { 
          this.legitUser = user;  
          this.loginStatus = true;       
          return true;

        }
      }
    }
    return false;
  }
  //A simple getter to provide other services with an authenticated user object
  getCurrentUser()
  {
    return this.legitUser;
  }

  //A simple getter to provide other services with an booleand representing if  a user is loggen in (true) or not (false)
  getLoginStatus()
  {
    return this.loginStatus;
  }

  //A login method based on a trusted name, in this case the name saved in a cookie localy on the user machine
  nameLookUp(name)
  {
    for(let user of this.users)
    {
      if(name === user.Benutzername)
      {
        this.legitUser = user;     
        this.loginStatus = true;    
        return true;    
      }
    }
    return false;
  }

  //This method resets the login relevant variables to a logout state 
  logout()
  {
    this.legitUser  = undefined;
    this.loginStatus = false;
  }
}

