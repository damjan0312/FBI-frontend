import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalPrisonComponent } from './criminal-prison.component';

describe('CriminalPrisonComponent', () => {
  let component: CriminalPrisonComponent;
  let fixture: ComponentFixture<CriminalPrisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminalPrisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalPrisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
