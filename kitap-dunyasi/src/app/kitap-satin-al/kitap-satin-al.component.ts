import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {KitapService} from '../kitap.service';

@Component({
  selector: 'app-kitap-satin-al',
  templateUrl: './kitap-satin-al.component.html',
  styleUrls: ['./kitap-satin-al.component.scss']
})
export class KitapSatinAlComponent implements OnInit {

  satinAl = new FormGroup({
    ad: new FormControl(''),
    yazar: new FormControl(''),
    fiyat: new FormControl(''),
    stok: new FormControl(''),
    fotoURL: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

}
