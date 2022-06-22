import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCarouseComponent } from './brand-carouse.component';

describe('BrandCarouseComponent', () => {
  let component: BrandCarouseComponent;
  let fixture: ComponentFixture<BrandCarouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandCarouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandCarouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
