import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPreferenceComponent } from './enter-preference.component';

describe('EnterPreferenceComponent', () => {
  let component: EnterPreferenceComponent;
  let fixture: ComponentFixture<EnterPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterPreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
