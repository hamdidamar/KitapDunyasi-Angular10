import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitapEkleComponent } from './kitap-ekle.component';

describe('KitapEkleComponent', () => {
  let component: KitapEkleComponent;
  let fixture: ComponentFixture<KitapEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitapEkleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitapEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
