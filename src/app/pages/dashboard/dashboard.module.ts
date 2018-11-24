import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing.module';
import {TranslateSharedModule} from '../../shared/module/translate.sharedmodule';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateSharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
