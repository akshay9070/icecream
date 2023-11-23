import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckExistingComponent } from './check-existing.component';

describe('CheckExistingComponent', () => {
  let component: CheckExistingComponent;
  let fixture: ComponentFixture<CheckExistingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckExistingComponent]
    });
    fixture = TestBed.createComponent(CheckExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
