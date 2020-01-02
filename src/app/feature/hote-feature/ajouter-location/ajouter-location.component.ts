import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-location',
  templateUrl: './ajouter-location.component.html',
  styleUrls: ['./ajouter-location.component.css']
})
export class AjouterLocationComponent implements OnInit {

  isLinear = false;
  public AjoutLoc={
    "titre":"",
    "type": "",
    "adresse": "",
    "description": "",
    "prix": "",
    "nbrpiece": "",
  };
  public equip;
  public access;
  public regle;
  public selectedFile;
  public subsc;
  
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {

  }

  //charger image
  public  onFileChanged(event) {
    console.log(event);
    //takhed smiya dyal tsswira
    this.selectedFile = event.target.files[0];
  }
  
// This part is for uploading
onUpload() {
  

  const uploadData = new FormData();
  uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  uploadData.append('titre', this.AjoutLoc.titre);
  uploadData.append('type', this.AjoutLoc.type);
  uploadData.append('adresse', this.AjoutLoc.adresse);
  uploadData.append('description', this.AjoutLoc.description);
  uploadData.append('prix', this.AjoutLoc.prix);
  uploadData.append('nbrpiece', this.AjoutLoc.nbrpiece);
  uploadData.append('equipements', this.equip);
  uploadData.append('accessibilites', this.access);
  uploadData.append('reglements', this.regle);

  this.httpClient.post('http://localhost:8080/api/location/upload', uploadData)
  .subscribe(
               res => {this.subsc=true},
               err => this.subsc=false
            );
  document.location.href="http://localhost:4200/AccueilHote"; 



 }

}
