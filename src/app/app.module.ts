import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorModule } from './cor/cor.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HoteFeatureModule } from './feature/hote-feature/hote-feature.module';
import { TouristeFeatureModule } from './feature/touriste-feature/touriste-feature.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CorModule,
    HoteFeatureModule,
    TouristeFeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
