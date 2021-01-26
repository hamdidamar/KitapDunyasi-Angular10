import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import {KitapService} from '../kitap.service';

@Component({
  selector: 'app-kitap-listele',
  templateUrl: './kitap-listele.component.html',
  styleUrls: ['./kitap-listele.component.scss']
})
export class KitapListeleComponent implements OnInit {

  searchValue = "";
  items = {};
  loggedIn = false;
  constructor(private kitap: KitapService,private account: AccountService) { }

  ngOnInit(): void {
    this.kitap.getList().subscribe((result=>{
      console.warn(result);
      this.items = result;
    }))
    this.loggedIn = this.account.loggedIn;
  }

  onChange(UpdatedValue : string) :void 
  { 
    this.searchValue = UpdatedValue; 
  }

}
