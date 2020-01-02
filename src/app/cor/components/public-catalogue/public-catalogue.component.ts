import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/cor/service/location/location.service'
import { FiltreService } from '../../service/recherche/filtre.service';


@Component({
  selector: 'app-public-catalogue',
  templateUrl: './public-catalogue.component.html',
  styleUrls: ['./public-catalogue.component.css']
})
export class PublicCatalogueComponent implements OnInit {
  public Session=false;
  public location:any;
  public bestlocation:any;
  public base64Data: any;
  public convertedImage: any;
  filtre
  //filtre a7na khdinaha
  constructor( private _locationService: LocationService,private _bestlocationService: LocationService) { }

  ngOnInit() {
    this._locationService.getLocation()
      .subscribe(
        data=> {this.location=data;
                this.base64Data=this.location.pic
                this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
        })
        this._bestlocationService.getBestLocation()
        .subscribe(
          data=> {this.bestlocation=data;
                  this.base64Data=this.bestlocation.pic
                  this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
          })


  }


  CheckSession(){
    this.Session=false
  }


}
