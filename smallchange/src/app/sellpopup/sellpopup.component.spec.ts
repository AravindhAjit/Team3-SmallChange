import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellpopupComponent } from './sellpopup.component';

describe('SellpopupComponent', () => {
  let component: SellpopupComponent;
  let fixture: ComponentFixture<SellpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
