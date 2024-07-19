import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDiagnoseComponent } from './home-diagnose.component';

describe('HomeDiagnoseComponent', () => {
  let component: HomeDiagnoseComponent;
  let fixture: ComponentFixture<HomeDiagnoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDiagnoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDiagnoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
