import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
/* module */
import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* routing */
import { routing } from './pages.routing';

/* service */
import { LoginService } from '../shared/services/login.service';

import { AuthGuard } from '../shared/guards/auth.guard';
 import {TranslateSharedModule} from '../shared/module/translate.sharedmodule';

 import { NgxLoadingModule,ngxLoadingAnimationTypes  } from 'ngx-loading';




@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    routing,
    TranslateSharedModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#1a1aff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#1a1aff'
  })
  ],
  providers: [
    LoginService,AuthGuard
],
  declarations: [LoginComponent,PagesComponent, RegisterComponent]
})
export class PagesModule { }
