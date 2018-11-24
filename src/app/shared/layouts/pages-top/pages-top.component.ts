import { Component, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { UserModel } from '../../models/index';
import { TranslateService } from '@ngx-translate/core';
import { KeyValue } from '../../models/index';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent {
  avatarImgSrc: string; //  = 'assets/images/selvaimg.jpg';
  userName: string;//= 'Folisise Chosielie';
  petName: string ; //= 'Musician, Player';
  userModel = new UserModel();
public languageList = new Array<KeyValue>();
  language = {};
  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };

  constructor(private _globalService: GlobalService
    ,public translate: TranslateService
    ) { 
    
    this.userModel = JSON.parse(localStorage.getItem("_userModel")); 
    this.userName = this.userModel.Name;
    this.petName = this.userModel.PetName;
    this.avatarImgSrc = this.userModel.Image;
// translate
    this.languageList.push({ key: 'af', value: 'Afrikaans' });
    this.languageList.push({ key: 'en', value: 'English' });
    this.languageList.push({ key: 'zu', value: 'Zulu' });
    this.languageList.push({ key: 'ta', value: 'Tamil' });
   let currentlang = this.languageList.filter(i=>i.key =='en');
   if(currentlang!=null && currentlang!= undefined && currentlang.length == 1)
   {
    this.language = currentlang[0].key;
    translate.addLangs(['en', 'af','zu','ta']);
    translate.setDefaultLang('en');
    
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|af|ta|zu/) ? browserLang : 'en');
   }
  }

  public _sidebarToggle() {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }
  onLanguageChange(language) {
    this.translate.use(language);
    localStorage.setItem('langugae', language);
  }

}
