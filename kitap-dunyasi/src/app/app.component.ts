import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kitap-dunyasi';
  
  loggedIn = false;
  constructor(private account:AccountService,private router:Router) { }

  IsLoggedIn(){
    return this.account.isLoggedIn();
  }

  logOut(){
    this.router.navigate([""]);
    return this.account.logout();
  }
}
