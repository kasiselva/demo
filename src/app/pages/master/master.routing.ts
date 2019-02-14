import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';
import { EditmasterComponent } from '../editmaster/editmaster.component';
import { AddmasterComponent } from '../addmaster/addmaster.component';

const childRoutes: Routes = [
    { path: '', component: MasterComponent},
    { path: 'addmaster', component: AddmasterComponent },
    { path: 'editmaster/:id', component: EditmasterComponent },
];

export const routing = RouterModule.forChild(childRoutes);
