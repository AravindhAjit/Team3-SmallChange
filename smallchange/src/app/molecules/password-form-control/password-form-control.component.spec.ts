import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFormControlComponent } from './password-form-control.component';

describe('PasswordFormControlComponent', () => {
  let component: PasswordFormControlComponent;
  let fixture: ComponentFixture<PasswordFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render password label atom',()=>{
    expect(fixture.debugElement.nativeElement.querySelector('app-form-label')).toBeTruthy();
  });

  it('should render password text box atom',()=>{
    expect(fixture.debugElement.nativeElement.querySelector('app-text-box-password')).toBeTruthy();
  });

  // it('should display error message until requirements satisfied',()=>{
  //   var password=fixture.debugElement.nativeElement.querySelector('app-text-box-password').querySelector('input');
  //   password.value='';
  //   expect(fixture.debugElement.nativeElement.querySelector('div').display).toBe('none');
  //   password.value='ABCDEF';
  //   expect(fixture.debugElement.nativeElement.querySelector('div').display).toBe('block');

  // })

});
