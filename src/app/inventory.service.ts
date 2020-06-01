import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inventory } from './inventory';
import { Observable} from 'rxjs';

@Injectable()
export class InventoryService {

    private getInventoryUrl = 'http://localhost:8080/Lagerbestand';

    constructor(private http: HttpClient){}

    getInventory(): Observable<Inventory[]> {
        return this.http.get<Inventory[]>(this.getInventoryUrl)
    }

}




