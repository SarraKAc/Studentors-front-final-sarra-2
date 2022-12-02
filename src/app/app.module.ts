import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './online/home/home.component';
import { HeaderComponent } from './online/header/header.component';
import { FooterComponent } from './online/footer/footer.component';
import { ServiceDemandeComponent } from './online/service-demande/service-demande.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostServiceOffComponent } from './online/user/post-service-off/post-service-off.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ProfilComponent } from './online/user/profil/profil.component';
import { EditServiceOffComponent } from './online/user/edit-service-off/edit-service-off.component';
import { PostServiceDemComponent } from './online/user/post-service-dem/post-service-dem.component';
import { Error404Component } from './error404/error404.component';
import { MessagerieComponent } from './online/messagerie/messagerie.component';
import { EditProfilComponent } from './online/user/edit-profil/edit-profil.component';
import { EditServiceDemComponent } from './online/user/edit-service-dem/edit-service-dem.component';
import { ServiceOffertComponent } from './online/service-offert/service-offert.component';
import { LogInComponent } from './online/log-in/log-in.component';
import { SignUpComponent } from './online/sign-up/sign-up.component';
import { PricingComponent } from './online/pricing/pricing.component';
import { AboutComponent } from './online/about/about.component';
import { TokenInterceptor, TokenInterceptorProvider } from './_helpers/token.interceptor';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { DetailsServiceComponent } from './online/details-service/details-service.component';
import { DetailsServiceDemComponent } from './online/details-service-dem/details-service-dem.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServiceDemandeComponent,
    PostServiceOffComponent,
    ProfilComponent,
    EditServiceOffComponent,
    PostServiceDemComponent,
    Error404Component,
    MessagerieComponent,
    EditProfilComponent,
    EditServiceDemComponent,
    ServiceOffertComponent,
    LogInComponent,
    SignUpComponent,
    PricingComponent,
    AboutComponent,
    DashboardAdminComponent,
    DetailsServiceComponent,
    DetailsServiceDemComponent
    
  ],
  imports: [
    FormsModule,
    FilterPipeModule,
    BrowserModule,
    OrderModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
