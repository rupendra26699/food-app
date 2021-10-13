import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityManagementComponent } from './quantity-management.component';

describe('QuantityManagementComponent', () => {
  let component: QuantityManagementComponent;
  let fixture: ComponentFixture<QuantityManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
