import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { HairTreatmentComponent } from './components/all-services/hair-treatment/hair-treatment.component';
import { SkinTreatmentComponent } from './components/all-services/skin-treatment/skin-treatment.component';
import { LaserTreatmentComponent } from './components/all-services/laser-treatment/laser-treatment.component';
import { SemiPermanentTreatmentComponent } from './components/all-services/semi-permanent-treatment/semi-permanent-treatment.component';
import { PackagesComponent } from './components/all-services/packages/packages.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'services', component: ServicesComponent},
  {path:'services/hair', component: HairTreatmentComponent},
  {path:'services/skin',component: SkinTreatmentComponent},
  {path:'services/laser', component: LaserTreatmentComponent},
  {path:'services/semi', component: SemiPermanentTreatmentComponent},
  {path:'services/packages', component: PackagesComponent},
  {path:'success', component: SuccessComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
        //scrollPositionRestoration: 'enabled'
      })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
