import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
},
{
  path: 'list',
  loadChildren: () => import('./list/list.module').then(m => m.ListModule)
},
{
  path: 'statistic',
  loadChildren: () => import('./statistic/statistic.module').then(m => m.StatisticModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
