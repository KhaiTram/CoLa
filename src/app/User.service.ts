import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
    
    private UsersUrl = 'http://localhost:8080/Users';
    private PostUsersUrl = 'http://localhost:8080/User';
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    constructor(private http: HttpClient) { }
     
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.UsersUrl)
    }

    postUsers(newUser: User): Observable<User> { 
        console.log("Post User:"+newUser);
        return this.http.post(this.PostUsersUrl, newUser, this.httpOptions).pipe(map((x: User) => x));
        // return this.http.post(this.UsersUrl, newUser, this.httpOptions);
    }


}