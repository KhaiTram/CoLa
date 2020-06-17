import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
    
    private UsersUrl = 'http://localhost:8080/Users';

     httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    constructor(private http: HttpClient) { }
     
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.UsersUrl)
    }

    postUsers(newUser: User): Observable<User> { 
        console.log("Post User:"+newUser);

     var test = {name: "test"};
     console.log(test.name);
        return this.http.post(this.UsersUrl,JSON.stringify(newUser), this.httpOptions).pipe(map((x: User) => x));
     
    }


}