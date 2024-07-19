import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCarouselComponent } from './smart-carousel.component';

describe('SmartCarouselComponent', () => {
  let component: SmartCarouselComponent;
  let fixture: ComponentFixture<SmartCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
