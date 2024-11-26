import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottumNavComponent } from './bottum-nav.component';

describe('BottumNavComponent', () => {
  let component: BottumNavComponent;
  let fixture: ComponentFixture<BottumNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottumNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottumNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
