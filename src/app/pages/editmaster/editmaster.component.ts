import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Master } from '../../shared/models/index';
@Component({
  selector: 'app-editmaster',
  templateUrl: './editmaster.component.html',
  styleUrls: ['./editmaster.component.scss']
})
export class EditmasterComponent implements OnInit {
  master = new Master();
  id: number;
  constructor(public router: Router, 
    private route: ActivatedRoute,) { 
      this.route.params.subscribe(params => {
        this.id = +params['id'];
      });
    }

  ngOnInit() {
    debugger;
    var saad = this.id;
  }
  // loaddata()
  // {
  //   this.http.get("http://localhost:5555/test").subscribe(
  //     (res: Response) => {
  //       this.products = res.json();
  //       for(var i = 0; i < this.products.length ; i++) {
  //         if(parseInt(this.products[i].id) === this.id) {
  //           this.exist = true;
  //           this.data = this.products[i];
  //           break;
  //         } else {
  //           this.exist = false;
  //         }
  //       }
  //     }
  // }

}
