import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MasterComponent} from './master.component'
import { routing } from './master.routing';
import {TranslateSharedModule} from '../../shared/module/translate.sharedmodule';
import { EditmasterComponent } from '../editmaster/editmaster.component';
import { AddmasterComponent } from '../addmaster/addmaster.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateSharedModule
  ],
  declarations: [MasterComponent,EditmasterComponent,AddmasterComponent]
})
export class MasterModule { }
