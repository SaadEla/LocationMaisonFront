import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { MatFormFieldModule,
         MatSliderModule} from '@angular/material';
import { PublicCatalogueComponent } from './components/public-catalogue/public-catalogue.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [HeaderComponent, FooterComponent, InscriptionComponent, PublicCatalogueComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    InscriptionComponent,

  ]
})
export class CorModule { }
