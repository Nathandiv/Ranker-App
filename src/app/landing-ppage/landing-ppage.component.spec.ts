import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPpageComponent } from './landing-ppage.component';

describe('LandingPpageComponent', () => {
  let component: LandingPpageComponent;
  let fixture: ComponentFixture<LandingPpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingPpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
