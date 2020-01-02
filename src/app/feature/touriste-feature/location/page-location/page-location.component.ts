import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/cor/service/location/location.service';
import { ActivatedRoute } from '@angular/router';

declare let paypal: any;

@Component({
  selector: 'app-page-location',
  templateUrl: './page-location.component.html',
  styleUrls: ['./page-location.component.css']
})
export class PageLocationComponent implements OnInit {

  public locationId;
  public location:any
  public base64Data: any
  public convertedImage: any;
  public ratings: any;
  public equipements:any;
  public reglements:any;
  public accessibilites:any;
  public countRating:any;

  constructor( private _locationService: LocationService, private route: ActivatedRoute){}

  ngOnInit() {
    //recuperer l'id de la location
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.locationId = id;
    //recuperer le logement
    this._locationService.getOneLocation(this.locationId)
    .subscribe(
      data=> {this.location=data;
              this.countRating=this.location.ratings.length;
              this.base64Data=this.location.pic;
              this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
              //recuperer les ratings
              this.ratings=this.location.ratings;
              this.equipements=this.location.equipement;
              this.reglements=this.location.reglement;
              this.accessibilites=this.location.accessibilite
              console.log(this.ratings);
      })
  }
  //A voir apres
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6 && day !== 2;
  }
  message(){
      document.location.href="http://localhost:4200/messageTouriste"; 
    }
  //PAYPAL
  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 50;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AdYQSTQtXQ5ybplR78L7gMQ_LrfRSUTRMq-o1aVCtTwMGdG4wALoijjTXhKrmScVQawjnCbIIgduSW_h',
      production: 'EI6UENmaBvdaGFl1d2fDczmTwmEG_FC-kGI83gm6G98JrAZjkAYeT_-oYZ5iffBQHMkOlxrsQ6D9SGbp'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.location.prix*3, currency: 'EUR' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

}
