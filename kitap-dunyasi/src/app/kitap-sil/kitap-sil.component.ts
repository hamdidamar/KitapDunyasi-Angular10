import { Component, OnInit } from '@angular/core';
import {KitapService} from '../kitap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitap-sil',
  templateUrl: './kitap-sil.component.html',
  styleUrls: ['./kitap-sil.component.scss']
})
export class KitapSilComponent implements OnInit {

  constructor(private kitap:KitapService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteBook(){
    var kitapid = parseInt(this.router.url.substr(this.router.url.length -1),10);
    console.warn(kitapid);
    this.kitap.deleteBook(kitapid).subscribe(result=>{
      console.warn(kitapid);
      console.warn(result);
    })
  }
}
