import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticRoutingModule } from './statistic-routing.module';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { StatisticComponent } from './statistic.component';



@NgModule({
  declarations: [
    StatisticComponent,
    StatisticsPageComponent
  ],
  imports: [
    CommonModule,
    StatisticRoutingModule
  ]
})
export class StatisticModule { }
