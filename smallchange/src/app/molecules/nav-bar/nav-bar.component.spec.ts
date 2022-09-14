import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the nav bar links',()=>{

    let links=fixture.debugElement.nativeElement.querySelectorAll('app-nav-bar-link');

    expect(links.length).toBe(4);
    expect(links[0].textContent).toBe('Portfolio');
    expect(links[1].textContent).toBe('Activity');
    expect(links[2].textContent).toBe('Trade');
    expect(links[3].textContent).toBe('Preferences');

  })
});
