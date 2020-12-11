import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitapEkleComponent } from './kitap-ekle/kitap-ekle.component';
import { KitapSilComponent } from './kitap-sil/kitap-sil.component';
import { KitapGuncelleComponent } from './kitap-guncelle/kitap-guncelle.component';
import { KitapListeleComponent } from './kitap-listele/kitap-listele.component';
import { KitapSatinAlComponent } from './kitap-satin-al/kitap-satin-al.component';

@NgModule({
  declarations: [
    AppComponent,
    KitapEkleComponent,
    KitapSilComponent,
    KitapGuncelleComponent,
    KitapListeleComponent,
    KitapSatinAlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
