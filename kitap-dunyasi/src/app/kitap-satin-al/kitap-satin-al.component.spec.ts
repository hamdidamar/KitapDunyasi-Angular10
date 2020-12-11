import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitapSatinAlComponent } from './kitap-satin-al.component';

describe('KitapSatinAlComponent', () => {
  let component: KitapSatinAlComponent;
  let fixture: ComponentFixture<KitapSatinAlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitapSatinAlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitapSatinAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
