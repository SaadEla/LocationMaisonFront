import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/cor/service/location/location.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifier-location',
  templateUrl: './modifier-location.component.html',
  styleUrls: ['./modifier-location.component.css']
})
export class ModifierLocationComponent implements OnInit {

  //champs pour afficher les valeurs
  public locationId;
  public location:any
  public base64Data: any
  public convertedImage: any;

//Champs pour faire l update
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
  public updated;

  constructor( private _locationService: LocationService, private route: ActivatedRoute,private httpClient: HttpClient){}

  ngOnInit() {
    //recuperer l'id de la location
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.locationId = id;
    console.log(this.locationId)
    //recuperer le logement
    this._locationService.getOneLocation(this.locationId)
    .subscribe(
      data=> {this.location=data;
              this.base64Data=this.location.pic;
              this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
      })
  }

  // This part is for updating
  onUpdate() {

  const uploadData = new FormData();

  uploadData.append('id', this.locationId);
  uploadData.append('titre', this.AjoutLoc.titre);
  uploadData.append('type', this.AjoutLoc.type);
  //uploadData.append('equipements', this.equip);


  this.httpClient.put('http://localhost:8080/api/location/update', uploadData)
  .subscribe(
               res => {this.updated=true},
               err => this.updated=false
            );
  document.location.href="http://localhost:4200/AccueilHote"; 
 }
}
