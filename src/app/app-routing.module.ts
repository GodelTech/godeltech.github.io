import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_ROUTES } from './constants/app-routes.const';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: APP_ROUTES.dashboard,
                component: DashboardComponent
            },
            {
                path: APP_ROUTES.repositoryInfo,
                loadChildren: () => import('./repository/repository.module').then(m => m.RepositoryModule)
            },
            { path: '', redirectTo: APP_ROUTES.dashboard, pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
