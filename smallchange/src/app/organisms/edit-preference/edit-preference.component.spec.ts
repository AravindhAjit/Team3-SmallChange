import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { Preference } from 'src/app/models/preference';
import { PrefernceService } from 'src/app/service/prefernce.service';

import { EditPreferenceComponent } from './edit-preference.component';

describe('EditPreferenceComponent', () => {

  let testPreference=
    {
      purposeOfInvestment: 'default',
      riskTolerance: 'default',
      incomeCategory: 'default',
      investmentLength: 'default',
      preferenceSet: true
    };
  let mockPreferenceService: any;
  let component: EditPreferenceComponent;
  let fixture: ComponentFixture<EditPreferenceComponent>;

  beforeEach(async () => {
    mockPreferenceService=jasmine.createSpyObj('PrefernceService',['getPreferences','setPreferences']);
    mockPreferenceService.getPreferences.and.returnValue(testPreference);
    await TestBed.configureTestingModule({
      declarations: [ EditPreferenceComponent ],
      providers: [ {provide: PrefernceService, useValue: mockPreferenceService}]
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

  it('should render div only when preferences set',()=>{
    component.preference.preferenceSet=false;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.preferencesList')).toBeFalsy();
    
    component.preference.preferenceSet=true;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.preferencesList')).toBeTruthy();
    
  });

  


});



