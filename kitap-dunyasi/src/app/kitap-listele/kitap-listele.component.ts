import { Component, OnInit } from '@angular/core';
import {KitapService} from '../kitap.service';

@Component({
  selector: 'app-kitap-listele',
  templateUrl: './kitap-listele.component.html',
  styleUrls: ['./kitap-listele.component.scss']
})
export class KitapListeleComponent implements OnInit {

  items = {};
  constructor(private kitap: KitapService) { }

  ngOnInit(): void {
    this.kitap.getList().subscribe((result=>{
      console.warn(result);
      this.items = result;
    }))
  }

}
