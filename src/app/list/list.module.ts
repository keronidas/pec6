import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { HomeRoutingModule } from '../home/home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list.component';
import {ScrollingModule} from '@angular/cdk/scrolling';



@NgModule({
  declarations: [
    ListPageComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    HomeRoutingModule,
    HttpClientModule,
    ScrollingModule
  ]
})
export class ListModule { }




