import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { KitapService } from '../kitap.service';
@Component({
  selector: 'app-kitap-guncelle',
  templateUrl: './kitap-guncelle.component.html',
  styleUrls: ['./kitap-guncelle.component.scss']
})
export class KitapGuncelleComponent implements OnInit {


  alert: boolean = false;
  kitapGuncelle = new FormGroup({
    ad: new FormControl(''),
    yazar: new FormControl(''),
    fiyat: new FormControl(''),
    stok: new FormControl(''),
    fotoUrl: new FormControl('')
  })

  constructor(private kitap: KitapService, private router: ActivatedRoute) { }


  ngOnInit(): void {
    this.kitap.getCurrentBook(this.router.snapshot.params.id).subscribe((result) => {
      this.kitapGuncelle = new FormGroup({
        ad: new FormControl(result['ad']),
        yazar: new FormControl(result['yazar']),
        fiyat: new FormControl(result['fiyat']),
        stok: new FormControl(result['stok']),
        fotoUrl: new FormControl(result['fotoUrl'])
      })
    })
  }

  collection(){
    this.kitap.updateBook(this.router.snapshot.params.id,this.kitapGuncelle.value).subscribe((result)=>{
      console.warn(result);
      this.alert = true;
    })
  }

  closeAlert() {
    this.alert = false;
  }

}
