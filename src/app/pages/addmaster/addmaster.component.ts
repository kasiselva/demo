import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService,MasterService } from '../../shared/services/index'
import { Router } from '@angular/router';
import {Master} from '../../shared/models/index'

@Component({
  selector: 'app-addmaster',
  templateUrl: './addmaster.component.html',
  styleUrls: ['./addmaster.component.scss']
})
export class AddmasterComponent implements OnInit {
  addmasterForm: FormGroup;
  submitted = false;
  masterObj:object = {};
  currentDate : Date;
  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private masterService: MasterService,
    private router: Router) {
      this.currentDate = new Date();
     }

  ngOnInit() {
    this.addmasterForm = this.formBuilder.group({
      date: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.addmasterForm.controls; }
  onSave(massterdata) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addmasterForm.invalid) {
      return;
    }
    let master = new Master();
    master.date = massterdata.date;
    master.name = massterdata.name;
    master.description = massterdata.description;
    master.amount = massterdata.amount;
    this.masterService.saveMaster(master).subscribe(res => {
      this.alertService.success("Successfully Saved");
      this.router.navigate(["/pages/master"]);
    });
  }
}
