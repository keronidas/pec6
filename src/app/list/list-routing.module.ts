import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [{

    path: 'list',
    component: ListComponent,
    children: [
        {
            path: '',
            component: ListPageComponent
        }
    ]
},
{ path: '**', redirectTo: 'list' }
];




@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListRoutingModule { }
