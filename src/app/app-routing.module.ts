import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicCatalogueComponent } from './cor/components/public-catalogue/public-catalogue.component'
import { InscriptionComponent } from './cor/components/inscription/inscription.component';
import { AccueilHoteComponent } from './feature/hote-feature/accueil-hote/accueil-hote.component';
import { AccueilTouristeComponent } from './feature/touriste-feature/accueil-touriste/accueil-touriste/accueil-touriste.component';
import { PageLocationComponent } from './feature/touriste-feature/location/page-location/page-location.component';
import { AjouterLocationComponent } from './feature/hote-feature/ajouter-location/ajouter-location.component';
import { ModifierLocationComponent } from './feature/hote-feature/modifierLocation/modifier-location/modifier-location.component';
import { MessageHoteComponent } from './feature/hote-feature/message/message-hote/message-hote.component';
import { MessageTouristeComponent } from './feature/touriste-feature/message/message-touriste/message-touriste.component';



const routes: Routes = [
  {path:'', component:PublicCatalogueComponent},
  {path:'Inscription', component:InscriptionComponent},
  {path:'AccueilHote', component:AccueilHoteComponent},
  {path:'AccueilTouriste', component:AccueilTouristeComponent},
  {path:'PageLocation/:id', component:PageLocationComponent},
  {path:'AddLocation', component:AjouterLocationComponent},
  {path:'ModifierLocation/:id', component:ModifierLocationComponent},
  {path:'messageHote', component:MessageHoteComponent},
  {path:'messageTouriste', component:MessageTouristeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
