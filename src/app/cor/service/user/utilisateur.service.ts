import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private _url: string= "http://localhost:8080/api/User/hoteLocation/";

  
  constructor( private http: HttpClient) { }


  //recuperer une location
  getUserLocation(id) : Observable<IUser[]>{
    //caster le retour du get
    return this.http.get<IUser[]>(this._url + id)
  }

}