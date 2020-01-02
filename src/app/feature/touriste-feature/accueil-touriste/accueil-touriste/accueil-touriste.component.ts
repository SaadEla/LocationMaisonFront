import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/cor/service/location/location.service';
import { FiltreService } from 'src/app/cor/service/recherche/filtre.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-accueil-touriste',
  templateUrl: './accueil-touriste.component.html',
  styleUrls: ['./accueil-touriste.component.css']
})
export class AccueilTouristeComponent implements OnInit {
  public Session=true
  public location:any
  public locationRecomm:any
  public base64Data: any
  public convertedImage: any;

  constructor( private _locationService: LocationService, private router: Router) { }

  ngOnInit() {
    this._locationService.getLocation()
      .subscribe(
        data=> {this.location=data;
                this.base64Data=this.location.pic
                this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
                console.log(data)
        })

        this._locationService.getRecommendation()
      .subscribe(
        data=> {this.locationRecomm=data;
                this.base64Data=this.locationRecomm.pic
                this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
                console.log(data)
        })


  }

/*Pour filtrer*/
  filter(){
    var input,i,filter;
    var champfiltre = new Array();
    input = document.getElementById("filter");
    filter = input.value;
   for (i = 0; i < this.location.length; i++) {
        if (this.location[i].titre.includes(filter)) {
          champfiltre.push(this.location[i]);
        }
    }
    this.location=champfiltre

  }

  /*Pour filtrer*/
  filtreprix(){
    var maxprix,minprix,i,max,min;
    var champfiltre = new Array();
    maxprix = document.getElementById("maxprix");
    minprix = document.getElementById("minprix");
    max = maxprix.value;
    min = minprix.value;

   for (i = 0; i < this.location.length; i++) {
        if (this.location[i].prix<=max && this.location[i].prix>=min) {
          champfiltre.push(this.location[i]);
        }
    }
    this.location=champfiltre

  }
  onSelect(location) {
    //ici on transmet le parametre m3a la route
    this.router.navigate(['/PageLocation', location.id]);
  }



}
