import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Master } from '../../shared/models/index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService,MasterService } from '../../shared/services/index'

@Component({
  selector: 'app-editmaster',
  templateUrl: './editmaster.component.html',
  styleUrls: ['./editmaster.component.scss']
})
export class EditmasterComponent implements OnInit {
  master = new Master();
  id: number;
  addmasterForm: FormGroup;
  submitted = false;
  masterObj:object = {};
  constructor(public router: Router, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private masterService: MasterService) { 
      this.route.params.subscribe(params => {
        this.id = +params['id'];
      });
    }

  ngOnInit() {
    this.addmasterForm = this.formBuilder.group({
      date: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
    this.loaddata();
  }
  get f() { return this.addmasterForm.controls; }

  onSave(massterdata) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addmasterForm.invalid) {
      return;
    }
    this.masterService.updateMaster(this.master).subscribe(res => {
      this.alertService.success("Successfully Updated");
      this.router.navigate(["/pages/master"]);
    });
  }
  loaddata()
  {
    let masterList = [];
    this.masterService.getMasterList().subscribe(res => {
      if(res!=null && res!= undefined && res.length>0)
        masterList = res;
        let validres = masterList.find(x => x.id === this.id)
        if (validres != null && validres != undefined) {
          this.master.id = validres.id;
          this.master.date = validres.date;
          this.master.name = validres.name;
          this.master.description = validres.description;
          this.master.amount = validres.amount;
          // this.master = { id: validres.name,date :validres.date, name: validres.name,
          // description : validres.description,amount : validres.amount};
        }
    });
    // this.http.get("http://localhost:5555/test").subscribe(
    //   (res: Response) => {
    //     this.products = res.json();
    //     for(var i = 0; i < this.products.length ; i++) {
    //       if(parseInt(this.products[i].id) === this.id) {
    //         this.exist = true;
    //         this.data = this.products[i];
    //         break;
    //       } else {
    //         this.exist = false;
    //       }
    //     }
    //   }
  }

}
