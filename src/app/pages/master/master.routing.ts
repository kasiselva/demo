import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';

const childRoutes: Routes = [
    {
        path: '',
        component: MasterComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
