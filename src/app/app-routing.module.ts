import { PostServiceOffComponent } from './online/user/post-service-off/post-service-off.component';
import { ServiceDemandeComponent } from './online/service-demande/service-demande.component';
import { ServiceOffertComponent } from './online/service-offert/service-offert.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './online/home/home.component';
import { PostServiceDemComponent } from './online/user/post-service-dem/post-service-dem.component';
import { EditServiceOffComponent } from './online/user/edit-service-off/edit-service-off.component';
import { ProfilComponent } from './online/user/profil/profil.component';
import { Error404Component } from './error404/error404.component';
import { MessagerieComponent } from './online/messagerie/messagerie.component';
import { SignUpComponent } from './online/sign-up/sign-up.component';
import { LogInComponent } from './online/log-in/log-in.component';
import { AboutComponent } from './online/about/about.component';
import { PricingComponent } from './online/pricing/pricing.component';
import { EditProfilComponent } from './online/user/edit-profil/edit-profil.component';
import { EditServiceDemComponent } from './online/user/edit-service-dem/edit-service-dem.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { DetailsServiceComponent } from './online/details-service/details-service.component';
import { DetailsServiceDemComponent } from './online/details-service-dem/details-service-dem.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'servicesOff', pathMatch:'full'},
  {path:'servicesDem',component:ServiceDemandeComponent},
  {path:'servicesOff',component:ServiceOffertComponent},
  {path:'postservicesOff',component:PostServiceOffComponent},
  {path:'postservicesDem',component:PostServiceDemComponent},
  {path:'dashborad/edit-service-offert/:id',component:EditServiceOffComponent},
  {path:'dashborad/edit-service-demande/:id',component:EditServiceDemComponent},
  {path:'about',component:AboutComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'logIn',component:LogInComponent},
  {path:'pricing',component:PricingComponent},
  {path:'dashborad/profil',component:ProfilComponent},
  {path:'dashborad/edit-profil/:id',component:EditProfilComponent},
  {path:'dashborad/admin',component:DashboardAdminComponent},
  {path:'detailsServiceOff/:id',component:DetailsServiceComponent},
  {path:'detailsServiceDem/:id',component:DetailsServiceDemComponent},


  {path:'messagerie',component:MessagerieComponent},
  { path:'', redirectTo:'home',pathMatch:'full'},
  { path:'**',component:Error404Component},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
