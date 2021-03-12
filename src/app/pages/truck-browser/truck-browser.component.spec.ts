import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckBrowserComponent } from './truck-browser.component';

describe('TruckBrowserComponent', () => {
  let component: TruckBrowserComponent;
  let fixture: ComponentFixture<TruckBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
