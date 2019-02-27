import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Location} from "@angular/common";
@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http: HttpClient,private location:Location) { }

  getDatos(page):Observable<any>{
    return this.http.get('https://www.giantbomb.com/api/'+this.location.path()+'/?api_key=bdf027cd72932de05d639a3076f34e6e82329549&limit=8&format=json&filter=platforms:35|146&sort=original_release_date:desc&offset='+page)
 
  }
  getDetalles(type,guid):Observable<any>{
    return this.http.get('https://www.giantbomb.com/api/'+type+'/'+guid+'/?api_key=bdf027cd72932de05d639a3076f34e6e82329549&format=json')

  }
}