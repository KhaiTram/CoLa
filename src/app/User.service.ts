import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable, of } from 'rxjs';


@Injectable()
export class UserService {
    constructor(
        private http: HttpClient) { }


    private UsersUrl = 'http://localhost:8080/Users';

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.UsersUrl)
    }
}