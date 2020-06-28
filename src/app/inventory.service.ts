import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inventory } from './inventory';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class InventoryService {

    private InventoryUrl = 'http://localhost:8080/Lagerbestand';
    private InventoryProductsUrl = 'http://localhost:8080/ProduktLager';

    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


    constructor(private http: HttpClient){}

    getInventory(): Observable<Inventory[]> {
        return this.http.get<Inventory[]>(this.InventoryUrl)
    }

    getInventoryProducts(): Observable<any[]> {
        return this.http.get<any[]>(this.InventoryProductsUrl);
    }

    putInventories(newInventory: Inventory): Observable<Inventory> { 
        return this.http.put(this.InventoryUrl,JSON.stringify(newInventory), this.httpOptions).pipe(map((x: Inventory) => x));  
    }

}





