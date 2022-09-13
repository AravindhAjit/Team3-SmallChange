import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeSellComponent } from './trade-sell.component';

describe('TradeSellComponent', () => {
  let component: TradeSellComponent;
  let fixture: ComponentFixture<TradeSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeSellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
