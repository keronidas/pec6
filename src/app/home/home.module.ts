import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeService } from './services/home.service';


@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
 
})
export class HomeModule { }
