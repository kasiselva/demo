import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'pages',
        component: PagesComponent, canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'master', loadChildren: './master/master.module#MasterModule' },
        ]
    },
    {
        path: '**',
        component: PagenotfoundComponent,
    },
];

export const routing = RouterModule.forChild(childRoutes);
