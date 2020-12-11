import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitapListeleComponent } from './kitap-listele.component';

describe('KitapListeleComponent', () => {
  let component: KitapListeleComponent;
  let fixture: ComponentFixture<KitapListeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitapListeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitapListeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
