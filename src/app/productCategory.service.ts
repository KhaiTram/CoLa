import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductCategory } from './productCategory';
import { Observable} from 'rxjs';

@Injectable()
export class ProductCategoryService {
    
    private UsersUrl = 'http://localhost:8080/Kategorien';
    
    constructor(
        private http: HttpClient) { }
         
        
    getCategories(): Observable<ProductCategory[]> {
        return this.http.get<ProductCategory[]>(this.UsersUrl)
    }
}