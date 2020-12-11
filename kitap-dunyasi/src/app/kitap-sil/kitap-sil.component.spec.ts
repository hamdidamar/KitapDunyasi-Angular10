import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitapSilComponent } from './kitap-sil.component';

describe('KitapSilComponent', () => {
  let component: KitapSilComponent;
  let fixture: ComponentFixture<KitapSilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitapSilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitapSilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
