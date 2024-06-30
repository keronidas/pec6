import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticComponent } from './statistic.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';

const routes: Routes = [{
    path: 'statistic',
    component: StatisticComponent,
    children: [
        {
            path: '',
            component: StatisticsPageComponent
        }
    ]
},
{ path: '**', redirectTo: 'statistic' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatisticRoutingModule { }
