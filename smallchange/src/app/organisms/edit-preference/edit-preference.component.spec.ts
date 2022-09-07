import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPreferenceComponent } from './edit-preference.component';

describe('EditPreferenceComponent', () => {
  let component: EditPreferenceComponent;
  let fixture: ComponentFixture<EditPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
