import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderResultsComponentComponent } from './gender-results-component.component';

describe('GenderResultsComponentComponent', () => {
  let component: GenderResultsComponentComponent;
  let fixture: ComponentFixture<GenderResultsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenderResultsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderResultsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
