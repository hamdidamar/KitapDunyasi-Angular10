import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitapGuncelleComponent } from './kitap-guncelle.component';

describe('KitapGuncelleComponent', () => {
  let component: KitapGuncelleComponent;
  let fixture: ComponentFixture<KitapGuncelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitapGuncelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitapGuncelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
