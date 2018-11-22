import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateModule.forRoot()
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
