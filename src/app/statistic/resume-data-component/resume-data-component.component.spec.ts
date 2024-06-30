import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDataComponentComponent } from './resume-data-component.component';

describe('ResumeDataComponentComponent', () => {
  let component: ResumeDataComponentComponent;
  let fixture: ComponentFixture<ResumeDataComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeDataComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
