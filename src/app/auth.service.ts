import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public users = [];
  public legitUser;
  constructor(private UserService: UserService) { }

  authenticateLogin(name,password)
  {
    this.UserService.getUsers().subscribe(data => this.users = data);  
    for(let user of this.users)
    {
      if(name === user.Benutzername)
      {
        if(password === user.Passwort)
        { 
          this.legitUser = user;         
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
}

