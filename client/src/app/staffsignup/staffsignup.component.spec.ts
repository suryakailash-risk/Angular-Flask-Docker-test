import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsignupComponent } from './staffsignup.component';

describe('StaffsignupComponent', () => {
  let component: StaffsignupComponent;
  let fixture: ComponentFixture<StaffsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
