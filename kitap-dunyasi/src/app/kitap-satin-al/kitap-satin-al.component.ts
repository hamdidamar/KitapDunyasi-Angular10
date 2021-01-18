import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {KitapService} from '../kitap.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-kitap-satin-al',
  templateUrl: './kitap-satin-al.component.html',
  styleUrls: ['./kitap-satin-al.component.scss']
})
export class KitapSatinAlComponent implements OnInit {

  satinAl = new FormGroup({
    ad: new FormControl(''),
    soyad: new FormControl(''),
    adres: new FormControl(''),
    telefon: new FormControl(''),
    eposta: new FormControl(''),
  })

  constructor(private kitap:KitapService, private router: Router) { }

  ngOnInit(): void {
  }

  
  siparisVer(){
    var siparisdata = {
      kullaniciBilgi : this.satinAl.value,
      kitapid : this.router.url.substr(this.router.url.length -1)
    }
    this.kitap.saveOrder(siparisdata).subscribe((result)=>{
      console.warn("result",result)
    })
  }
}
