import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AccueilHoteComponent } from './accueil-hote/accueil-hote.component';
import { AjouterLocationComponent } from './ajouter-location/ajouter-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatInputModule, MatStepperModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ModifierLocationComponent } from './modifierLocation/modifier-location/modifier-location.component';
import { MessageHoteComponent } from './message/message-hote/message-hote.component';




@NgModule({
  declarations: [HeaderComponent, AccueilHoteComponent, AjouterLocationComponent, ModifierLocationComponent, MessageHoteComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule

  ],
  exports:[
    AccueilHoteComponent,
    ModifierLocationComponent
  ]
})
export class HoteFeatureModule { }
