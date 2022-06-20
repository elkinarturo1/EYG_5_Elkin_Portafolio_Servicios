import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioItemsComponent } from './portafolio-items.component';

describe('PortafolioItemsComponent', () => {
  let component: PortafolioItemsComponent;
  let fixture: ComponentFixture<PortafolioItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
