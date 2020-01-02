import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILocation } from './location';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _url: string= "http://localhost:8080/api/location/all";
  private _url1: string= "http://localhost:8080/api/location/choosen/";
  private _url2: string= "http://localhost:8080/api/location/best";
  private _url3: string= "http://localhost:8080/api/location/deleteLocation/";
  private _url4: string= "http://localhost:8080/api/location/recommendations";
  
  constructor( private http: HttpClient) { }

  //recuperer tous les locations
  getLocation() : Observable<ILocation[]>{
    //caster le retour du get
    return this.http.get<ILocation[]>(this._url)
  }
  //recuperer une location
  getOneLocation(id) : Observable<ILocation[]>{
    //caster le retour du get
    return this.http.get<ILocation[]>(this._url1 + id)
  }
    //recuperer locations recommandés
    getRecommendation() : Observable<ILocation[]>{
      //caster le retour du get
      return this.http.get<ILocation[]>(this._url4)
    }
  //recuperer Best location
  getBestLocation() : Observable<ILocation[]>{
    //caster le retour du get
    return this.http.get<ILocation[]>(this._url2)
  }

    //Supprimer Location
    deleteLocation(id) : Observable<ILocation[]>{
      return this.http.delete<ILocation[]>(this._url3+id)
    }
}
