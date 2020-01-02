import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMessage } from './message';



@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _url: string= "http://localhost:8080/api/Message/MsgHote";
  private _url1: string= "http://localhost:8080/api/Message/MsgTouriste";
  private _url2: string= "http://localhost:8080/api/Message/DeleteMsg/";

  
  constructor( private http: HttpClient) { }

  //recuperer Message hote saad
  getMessageHote() : Observable<IMessage[]>{
    //caster le retour du get
    return this.http.get<IMessage[]>(this._url)
  }
  //recuperer Message TOURISTE rizk
  getMessageTouriste() : Observable<IMessage[]>{
    //caster le retour du get
    return this.http.get<IMessage[]>(this._url1)
  }

  //Supprimer Location
  deleteMessage(id) : Observable<IMessage[]>{
    return this.http.delete<IMessage[]>(this._url2+id)
  }

}
