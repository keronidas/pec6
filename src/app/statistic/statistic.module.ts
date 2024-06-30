import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticRoutingModule } from './statistic-routing.module';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { StatisticComponent } from './statistic.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumeDataComponentComponent } from './resume-data-component/resume-data-component.component';
import { GenderComponentComponent } from './gender-component/gender-component.component';
import { GenderResultsComponentComponent } from './gender-results-component/gender-results-component.component';
// import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    StatisticComponent,
    StatisticsPageComponent,
    ResumeDataComponentComponent,
    GenderComponentComponent,
    GenderResultsComponentComponent
  ],
  imports: [
    CommonModule,
    StatisticRoutingModule,
    HttpClientModule,
    // NgChartsModule

  ]
})
export class StatisticModule { }
