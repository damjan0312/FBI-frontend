import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalCrimeComponent } from './criminal-crime.component';

describe('CriminalCrimeComponent', () => {
  let component: CriminalCrimeComponent;
  let fixture: ComponentFixture<CriminalCrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminalCrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalCrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
