import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { FeaturesComponent } from './components/features/features.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import { SkinTreatmentComponent } from './components/all-services/skin-treatment/skin-treatment.component';
import { HairTreatmentComponent } from './components/all-services/hair-treatment/hair-treatment.component';
import { LaserTreatmentComponent } from './components/all-services/laser-treatment/laser-treatment.component';
import { SemiPermanentTreatmentComponent } from './components/all-services/semi-permanent-treatment/semi-permanent-treatment.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PackagesComponent } from './components/all-services/packages/packages.component';
import { PackageComponent } from './components/package/package.component';
import { SuccessComponent } from './components/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopbarComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    FeaturesComponent,
    AppointmentComponent,
    LandingPageComponent,
    TreatmentsComponent,
    SkinTreatmentComponent,
    HairTreatmentComponent,
    LaserTreatmentComponent,
    SemiPermanentTreatmentComponent,
    SidebarComponent,
    PackagesComponent,
    PackageComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
