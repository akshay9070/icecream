import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformKycComponent } from './perform-kyc.component';

describe('PerformKycComponent', () => {
  let component: PerformKycComponent;
  let fixture: ComponentFixture<PerformKycComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformKycComponent]
    });
    fixture = TestBed.createComponent(PerformKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
