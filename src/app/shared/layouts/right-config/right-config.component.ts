import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'right-config',
  templateUrl: './right-config.component.html',
  styleUrls: ['./right-config.component.scss']
})
export class RightConfigComponent implements OnInit {

  isConfigToggle: boolean = false;
  constructor(private router: Router, private _globalService: GlobalService) { }

  ngOnInit() { }

  configToggle() {
    this.router.navigate(["login"]);
    //this.isConfigToggle = !this.isConfigToggle;
    //this._globalService._sidebarToggleState(!this.isConfigToggle);
    //this._globalService.dataBusChanged('sidebarToggle', !this.isConfigToggle);
  }
}
