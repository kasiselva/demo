import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../shared/services/index';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  masterList = [];
  constructor(private masterService: MasterService) { }

  ngOnInit() {
    this.fetchData();
  }
  deletemaster = function(id) {
    if(confirm("Are you sure?")) {
      this.masterService.deleteMaster(id).toPromise()
      .then(() => {
      this.fetchData();
      })
    }
  }
  fetchData = function() {
    this.masterService.getMasterList().subscribe(res => {
      if(res!=null && res!= undefined && res.length>0)
        this.masterList = res;
    });
  }
}
