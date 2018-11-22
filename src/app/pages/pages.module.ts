import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

/* module */
import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* routing */
import { routing } from './pages.routing';

/* service */
import { LoginService } from '../shared/services/login.service';

import { AuthGuard } from '../shared/guards/auth.guard';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    routing,
    TranslateModule.forRoot()
  ],
  providers: [
    LoginService,AuthGuard
],
  declarations: [LoginComponent,PagesComponent]
})
export class PagesModule { }
