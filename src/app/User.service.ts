import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable} from 'rxjs';

@Injectable()
export class UserService {
    
    private UsersUrl = 'http://localhost:8080/Users';
    
    constructor(
        private http: HttpClient) { }
         
        
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.UsersUrl)
    }
}