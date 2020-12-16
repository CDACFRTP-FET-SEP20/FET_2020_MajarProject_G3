import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtComponent } from './lt.component';

describe('LtComponent', () => {
  let component: LtComponent;
  let fixture: ComponentFixture<LtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
