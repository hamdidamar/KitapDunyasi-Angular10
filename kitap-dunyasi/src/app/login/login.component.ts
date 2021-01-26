import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  loggedIn = false;
  constructor(private account:AccountService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.account.login(this.loginForm.value);
    this.loggedIn = this.account.loggedIn;
    console.log(this.loggedIn);
    if(this.loggedIn){
      this.router.navigate(["kitaplar"]);
    }
    

  }

  

}
