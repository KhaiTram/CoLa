import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ArchiveService {
    
    private archiveUrl = 'http://localhost:8080/Archive';

     httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    constructor(private http: HttpClient) { }
     
    getArchive(): Observable<any[]> {
        return this.http.get<any[]>(this.archiveUrl)
    }

    postArchive(newArchive: any): Observable<any> { 
        console.log(newArchive);
        return this.http.post(this.archiveUrl,JSON.stringify(newArchive), this.httpOptions).pipe(map((x: any) => x));  
    }

}