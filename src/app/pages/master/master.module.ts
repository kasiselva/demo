import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MasterComponent} from './master.component'
import { routing } from './master.routing';
import {TranslateSharedModule} from '../../shared/module/translate.sharedmodule';
import { EditmasterComponent } from '../editmaster/editmaster.component';
import { AddmasterComponent } from '../addmaster/addmaster.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AlertService,MasterService } from '../../shared/services/index';

import { SharedModule } from '../../shared/shared.module';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateSharedModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
  ],
  providers: [
    AlertService,MasterService
],
  declarations: [MasterComponent,EditmasterComponent,AddmasterComponent]
})
export class MasterModule { }
