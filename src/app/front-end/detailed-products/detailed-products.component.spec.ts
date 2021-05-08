import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedProductsComponent } from './detailed-products.component';

describe('DetailedProductsComponent', () => {
  let component: DetailedProductsComponent;
  let fixture: ComponentFixture<DetailedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
