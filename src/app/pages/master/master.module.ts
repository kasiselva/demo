import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MasterComponent} from './master.component'
import { routing } from './master.routing';
import {TranslateSharedModule} from '../../shared/module/translate.sharedmodule';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateSharedModule
  ],
  declarations: [MasterComponent]
})
export class MasterModule { }
