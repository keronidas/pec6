import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '', 
                component: HomePageComponent
            }
        ]
    },
    { path: '**', redirectTo: 'home' } 
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
