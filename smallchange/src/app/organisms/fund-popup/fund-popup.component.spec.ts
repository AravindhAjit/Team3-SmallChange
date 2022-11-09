import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundPopupComponent } from './fund-popup.component';

describe('FundPopupComponent', () => {
  let component: FundPopupComponent;
  let fixture: ComponentFixture<FundPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
