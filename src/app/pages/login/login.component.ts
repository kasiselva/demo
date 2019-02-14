import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginParam} from '../../shared/customclass/loginparam'
import {UserModel} from '../../shared/models/index'
 import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginloading = false;
  submitted = false;
  isvalid = false;
  errormessage : string;
  email: string;
  password: string;
  logindata: any[];

  constructor(private router: Router, 
    private loginService: LoginService, private formBuilder: FormBuilder
    ,public translate: TranslateService
    ) {
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
  onLogin() {
    this.submitted = true;
    this.isvalid = false;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loginloading = true;
    let loginParam = new LoginParam();
    loginParam.Username = this.f.email.value;
    loginParam.Password = this.f.password.value;
    // this.loginService.login(loginParam).subscribe(result=>{
    //   var res = result;
    // },
    // err =>{
    //   var error = err;
    // });
    //////////////////////*********************************** */
    this.loginService.getLoginList().subscribe(userres => {
      if (userres != null && userres != undefined && userres.length > 0) {
        let validres = userres.find(x => x.email === this.f.email.value && x.password === this.f.password.value)
        if (validres != null && validres != undefined) {
         let usermodel: UserModel = { Name: validres.name,Username :validres.email, Email: validres.username,
          PetName : validres.petname,LoginDate : new Date(),Image : validres.image };
         localStorage.setItem("_userModel",JSON.stringify(usermodel))
         localStorage.setItem("_islogin",JSON.stringify("true"))
          this.router.navigate(["pages/dashboard"]);
        }
        else {
          this.loginloading = false;
          this.isvalid = true;
          this.errormessage = "Invalid credentials";
          //alert("Invalid credentials");
        }
      }
      else {
        this.loginloading = false;
        this.isvalid = true;
        this.errormessage = "Email or Password Wrong";
        //alert("Login data not available");
      }
    });
  }

}
