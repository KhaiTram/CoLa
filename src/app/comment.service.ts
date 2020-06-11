import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { comment } from './comment';
import { Observable} from 'rxjs';

@Injectable()
export class commentService {

    private getCommentUrl = 'http://localhost:8080/Kommentar';

    constructor(private http: HttpClient){}

    getComment(): Observable<comment[]> {
        return this.http.get<comment[]>(this.getCommentUrl)
    }

}