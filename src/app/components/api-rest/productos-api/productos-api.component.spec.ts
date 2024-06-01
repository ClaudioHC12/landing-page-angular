import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosApiComponent } from './productos-api.component';

describe('ProductosApiComponent', () => {
  let component: ProductosApiComponent;
  let fixture: ComponentFixture<ProductosApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
