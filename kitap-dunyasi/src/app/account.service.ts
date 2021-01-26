import { Injectable } from '@angular/core';
import { User } from './login/user';
import { HttpClient } from '@angular/common/http';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts = {};
  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  loggedIn = false;
  login(user: User): boolean {

    if (this.checkUser(user.username, user.password)) {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.username);
      alertify.set('notifier', 'position', 'top-center');
      alertify.success("Giriş işlemi başarılı.");
      return true;
    } else {
      this.loggedIn = false;
      return false;

    }

  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logout() {
    localStorage.removeItem("isLogged")
    this.loggedIn = false;
    alertify.success("Çıkış işlemi başarılı.");
  }

  checkUser(username, password): boolean {
    var user = this.http.get(this.url + "/hesaplar?kullaniciAdi=" + username + "&sifre=" + password).subscribe((result => {
      console.warn(result);
      this.accounts = result;
    }));

    return Object.keys(this.accounts).length == 1 ? true : false;
  }
}
