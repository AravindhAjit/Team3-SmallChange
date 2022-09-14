import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameFormControlComponent } from './username-form-control.component';

describe('UsernameFormControlComponent', () => {
  let component: UsernameFormControlComponent;
  let fixture: ComponentFixture<UsernameFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render username label atom',()=>{
    expect(fixture.debugElement.nativeElement.querySelector('app-form-label')).toBeTruthy();
  });

  it('should render the text box atom',()=>{
    expect(fixture.debugElement.nativeElement.querySelector('app-text-box-standard')).toBeTruthy();
  });

  // it('should display error message until requirements satisfied',()=>{
  //   var username=fixture.debugElement.nativeElement.querySelector('app-text-box-standard').querySelector('input');
  //   username.value='';
  //   expect(fixture.debugElement.nativeElement.querySelector('div').display).toBe('none');
  //   username.value='ABCDEF';
  //   expect(fixture.debugElement.nativeElement.querySelector('div').display).toBe('block');

  // })
});
