import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { KitapService } from '../kitap.service';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-kitap-ekle',
  templateUrl: './kitap-ekle.component.html',
  styleUrls: ['./kitap-ekle.component.scss']
})
export class KitapEkleComponent implements OnInit {
 

  kitapEkle = new FormGroup({
    ad: new FormControl(''),
    yazar: new FormControl(''),
    fiyat: new FormControl(''),
    stok: new FormControl(''),
    fotoUrl: new FormControl('')
  })

  
  constructor(private kitap: KitapService) { }

  ngOnInit(): void {
  }
  toplaKitap() {
    //console.warn(this.kitapEkle.value)
    this.kitap.saveBook(this.kitapEkle.value).subscribe((result) => {
      console.warn("result", result)
    })
    alertify.set('notifier', 'position', 'top-center');
    alertify.success("Kitap ekleme işlemi başarılı.");
  }
}
