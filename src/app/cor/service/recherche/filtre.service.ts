import { Injectable } from '@angular/core';
import { LocationService } from 'src/app/cor/service/location/location.service'

@Injectable({
  providedIn: 'root'
})
export class FiltreService {
  public location:any
  public base64Data: any
  public convertedImage: any
  public locationFiltrer
  public rechercher

  constructor( private _locationService: LocationService) { }


  ngOnInit() {
    console.log("Bedya ngOnInit")

  }

  Filtre(){
    console.log("Bedya Filtre")
    console.log("recherche wesslat l filtre service" +this.rechercher)
    this._locationService.getLocation()
    .subscribe(
      data=> {
        this.locationFiltrer=data.filter(locationFil => {
        locationFil.description.match(this.rechercher);
        });
              this.base64Data=this.locationFiltrer.pic
              this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
              console.log("chargement complete")
      });

    
    console.log("fin Filtre")
    return this.locationFiltrer

    
  }
}
