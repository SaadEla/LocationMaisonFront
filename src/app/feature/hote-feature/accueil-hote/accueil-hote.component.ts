import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/cor/service/user/utilisateur.service';
import { LocationService } from 'src/app/cor/service/location/location.service'

@Component({
  selector: 'app-accueil-hote',
  templateUrl: './accueil-hote.component.html',
  styleUrls: ['./accueil-hote.component.css']
})
export class AccueilHoteComponent implements OnInit {

  public utilisateurLocat:any;
  public utilisateur:any;
  public bestlocation:any;
  public base64Data: any;
  public convertedImage: any;

  constructor( private _UserService: UtilisateurService,private  _LocatService: LocationService) { }

  ngOnInit() {
    this._UserService.getUserLocation(25)//hiloooooooooooooooooo
      .subscribe(
        data=> {this.utilisateur=data;
                this.utilisateurLocat=this.utilisateur.locations;
                this.base64Data=this.utilisateurLocat.pic
                this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
        })
  }

  Supprimer(id){
    this._LocatService.deleteLocation(id).subscribe()
    document.location.reload(true)

  }

  

}
