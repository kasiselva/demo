import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public translate: TranslateService) {
    debugger;
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|id/) ? browserLang : 'en');
   }

  ngOnInit() {
  }

}
