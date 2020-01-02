import { Component } from '@angular/core';
//import { ViewChild, ElementRef} from '@angular/core';


//@ViewChild('displaymodelAuth') displaymodelAuth: ElementRef;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'locationMaison';
  public typeUtilisateur="internaute"

  //kayna ta f public catalogue bach ta7ed may9ad i cliki 3la chi card
  constructor() { }

  ngOnInit() {}


}
