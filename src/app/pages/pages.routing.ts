import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../shared/guards/auth.guard';
export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'pages',
        component: PagesComponent, canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
