import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeApartofComponent } from './home-apartof.component';

describe('HomeApartofComponent', () => {
  let component: HomeApartofComponent;
  let fixture: ComponentFixture<HomeApartofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeApartofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeApartofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
