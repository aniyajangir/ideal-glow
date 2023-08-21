import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinTreatmentComponent } from './skin-treatment.component';

describe('SkinTreatmentComponent', () => {
  let component: SkinTreatmentComponent;
  let fixture: ComponentFixture<SkinTreatmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkinTreatmentComponent]
    });
    fixture = TestBed.createComponent(SkinTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
