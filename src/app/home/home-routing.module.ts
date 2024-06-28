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
          path: '', // Ruta hija sin prefijo, se carga cuando se navega a /home
          component: HomePageComponent
        }
      ]
    },
    { path: '**', redirectTo: 'home' } // Ruta comodín fuera del array de rutas hijas
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
