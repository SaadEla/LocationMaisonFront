import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  public formInscr={
    "nom":"",
    "prenom": "",
    "email": "",
    "password": "",
    "typeCompte": ""
  };
  public succesInscr=false;


  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  Inscription(){  
  
    this.http.post('http://localhost:8080/api/User/Insc', this.formInscr)
    .subscribe(
                 res => {
                   console.log('Succes Occured during saving');
                   this.succesInscr=true},
                 err => console.log('Error Occured duringng saving: ' + err)
              );

  }
}
