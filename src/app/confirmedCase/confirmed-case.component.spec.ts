import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedCaseComponent } from './confirmed-case.component';

describe('GlobalInfoComponent', () => {
  let component: ConfirmedCaseComponent;
  let fixture: ComponentFixture<ConfirmedCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
