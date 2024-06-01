import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetailsApiComponent } from './producto-details-api.component';

describe('ProductoDetailsApiComponent', () => {
  let component: ProductoDetailsApiComponent;
  let fixture: ComponentFixture<ProductoDetailsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoDetailsApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoDetailsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
