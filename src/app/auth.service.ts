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

  subcribeToData()
  {
    this.UserService.getUsers().subscribe(data => this.users = data);
  }

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
  getCurrentUser()
  {
    return this.legitUser;
  }

  getLoginStatus()
  {
    return this.loginStatus;
  }

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

  logout()
  {
    this.legitUser  = undefined;
    this.loginStatus = false;
  }
}

