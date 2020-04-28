import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGlobalInfoComponent } from './add-global-info.component';

describe('AddGlobalInfoComponent', () => {
  let component: AddGlobalInfoComponent;
  let fixture: ComponentFixture<AddGlobalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGlobalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGlobalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
