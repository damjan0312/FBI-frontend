import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalDetailComponent } from './criminal-detail.component';

describe('CriminalDetailComponent', () => {
  let component: CriminalDetailComponent;
  let fixture: ComponentFixture<CriminalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
