import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFromComponent } from './feedback-from.component';

describe('FeedbackFromComponent', () => {
  let component: FeedbackFromComponent;
  let fixture: ComponentFixture<FeedbackFromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackFromComponent]
    });
    fixture = TestBed.createComponent(FeedbackFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
