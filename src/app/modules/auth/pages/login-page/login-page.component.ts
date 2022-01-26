import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
// padre = formGroup
// hijo = formControl
  formLogin: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required, 
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    });
  }

  sendLogin(){
    const body = this.formLogin.value;
    console.log(body);
  }
}
