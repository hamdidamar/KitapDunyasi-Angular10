import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitapEkleComponent } from './kitap-ekle/kitap-ekle.component'
import { KitapGuncelleComponent } from './kitap-guncelle/kitap-guncelle.component'
import { KitapSilComponent } from './kitap-sil/kitap-sil.component'
import { KitapListeleComponent } from './kitap-listele/kitap-listele.component'
import {IletisimComponent} from './iletisim/iletisim.component'
import {HakkindaComponent} from './hakkinda/hakkinda.component'
import {AnaSayfaComponent} from './ana-sayfa/ana-sayfa.component'
import {KitapSatinAlComponent} from './kitap-satin-al/kitap-satin-al.component'
const routes: Routes = [
  {
    component: AnaSayfaComponent,
    path: ''
  },
  {
    component: KitapListeleComponent,
    path: 'kitaplar'
  },
  {
    component: KitapEkleComponent,
    path: 'kitaplar/add'
  },
  {
    component: KitapGuncelleComponent,
    path: 'kitaplar/update/:id'
  },
  {
    component: KitapSilComponent,
    path: 'kitaplar/delete'
  },
  {
    component: IletisimComponent,
    path: 'iletisim'
  },
  {
    component: HakkindaComponent,
    path: 'hakkinda'
  },
  {
    component: KitapSatinAlComponent,
    path: 'kitaplar/buy/:id'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
