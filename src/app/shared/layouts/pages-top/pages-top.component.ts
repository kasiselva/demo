import { Component, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { UserModel } from '../../models/index';

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

  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };

  constructor(private _globalService: GlobalService) { 
    this.userModel = JSON.parse(localStorage.getItem("_userModel")); 
    this.userName = this.userModel.Name;
    this.petName = this.userModel.PetName;
    this.avatarImgSrc = this.userModel.Image;
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
}
