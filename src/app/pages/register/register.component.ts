import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AlertService} from '../../shared/services/index'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  profilepicturetext : string;
  imageSrc: string;
  constructor(private formBuilder: FormBuilder, 
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          profilepicture:[]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
        this.alertService.success("Successfully Registered");
        this.router.navigate(["login"]);
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    if(file.type=="image/jpeg"|| file.type=="image/png")
    {
    this.profilepicturetext = file.name;
    const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(file);
    }
    else{
        this.profilepicturetext = "";
        this.imageSrc="";
        alert("Unsupported format");
    }
  }

}
