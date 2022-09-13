import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeBuyComponent } from './trade-buy.component';

describe('TradeBuyComponent', () => {
  let component: TradeBuyComponent;
  let fixture: ComponentFixture<TradeBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
