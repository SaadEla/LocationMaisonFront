import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FiltreService } from '../../service/recherche/filtre.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public recherche="";
  public typeCompte="";
  public email="";
  public password="";
  public LocFiltre:any;

  @Output() public child=new EventEmitter();
  constructor( private _filtreService: FiltreService) { }
  
  ngOnInit() {
    }

  chercher(){
    console.log(this.recherche+"from header.ts")
    this._filtreService.rechercher=this.recherche;
    this.LocFiltre=this._filtreService.Filtre()
    console.log("-------------Header fct return-----------")
    console.log(this.LocFiltre)
    this.child.emit(this.LocFiltre)
      
}

  Connexion(){
    console.log("hello")
    if(this.typeCompte=="hote"){
      console.log("dkhelt lewla")
      console.log(this.typeCompte)
      document.location.href="http://localhost:4200/AccueilHote"; 
    }
    if(this.typeCompte=="touriste"){
      console.log("dkhelt ltanya")
      console.log(this.typeCompte)
      document.location.href="http://localhost:4200/AccueilTouriste"; 
    }


  }

}
