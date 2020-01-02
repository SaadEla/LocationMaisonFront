import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AccueilTouristeComponent } from './accueil-touriste/accueil-touriste/accueil-touriste.component';
import { PageLocationComponent } from './location/page-location/page-location.component';
import { MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { MessageTouristeComponent } from './message/message-touriste/message-touriste.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, AccueilTouristeComponent, PageLocationComponent, MessageTouristeComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  exports:[
    AccueilTouristeComponent,
    PageLocationComponent,
  ]
})
export class TouristeFeatureModule { }
