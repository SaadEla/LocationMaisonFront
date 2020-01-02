import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/cor/service/message/message.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-message-touriste',
  templateUrl: './message-touriste.component.html',
  styleUrls: ['./message-touriste.component.css']
})
export class MessageTouristeComponent implements OnInit {

  public MessageTouriste;
  public MessageAEnvoyer={
    "emetteur":"",
    "destinataire": "",
    "contenu": "",
  };

  constructor(private _messageService: MessageService, private httpClient: HttpClient) { }

  ngOnInit() {

    this._messageService.getMessageTouriste()
    .subscribe(
      data=> {this.MessageTouriste=data;
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
    document.location.href="http://localhost:4200/messageTouriste"; 
  }
}
