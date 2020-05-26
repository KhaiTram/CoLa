import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from './article';
import { Observable} from 'rxjs';

@Injectable()
export class ArticleService {

    private getArticleUrl = 'http://localhost:8080/Artikel';

    constructor(private http: HttpClient){}

    getArticles(): Observable<Article[]> {
        return this.http.get<Article[]>(this.getArticleUrl)
    }

}





