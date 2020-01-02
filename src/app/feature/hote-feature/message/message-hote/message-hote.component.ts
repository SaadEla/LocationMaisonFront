import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/cor/service/message/message.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-message-hote',
  templateUrl: './message-hote.component.html',
  styleUrls: ['./message-hote.component.css']
})
export class MessageHoteComponent implements OnInit {

  public MessageHote:any;
  public MessageAEnvoyer={
    "emetteur":"",
    "destinataire": "",
    "contenu": "",
  };
  constructor( private _messageService: MessageService, private httpClient: HttpClient) { }

  ngOnInit() {

    this._messageService.getMessageHote()
    .subscribe(
      data=> {this.MessageHote=data;
      })
      
  }

  SupprimerMsg(id){
    this._messageService.deleteMessage(id).subscribe()
    document.location.reload(true)

  }
  EnvoyerMessage(){
    const uploadData = new FormData();
    uploadData.append('emetteur', this.MessageAEnvoyer.emetteur);
    uploadData.append('destinataire', this.MessageAEnvoyer.destinataire);
    uploadData.append('contenu', this.MessageAEnvoyer.contenu);

  
    this.httpClient.post('http://localhost:8080/api/Message/EnvoyerMsg', uploadData)
    .subscribe(
                 /*res => {this.subsc=true},
                 err => this.subsc=false*/
              );
    document.location.href="http://localhost:4200/messageHote"; 
  }


}
