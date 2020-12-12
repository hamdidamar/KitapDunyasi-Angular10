import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaSayfaComponent } from './ana-sayfa.component';

describe('AnaSayfaComponent', () => {
  let component: AnaSayfaComponent;
  let fixture: ComponentFixture<AnaSayfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaSayfaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaSayfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
