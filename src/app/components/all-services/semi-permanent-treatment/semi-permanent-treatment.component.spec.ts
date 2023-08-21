import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiPermanentTreatmentComponent } from './semi-permanent-treatment.component';

describe('SemiPermanentTreatmentComponent', () => {
  let component: SemiPermanentTreatmentComponent;
  let fixture: ComponentFixture<SemiPermanentTreatmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemiPermanentTreatmentComponent]
    });
    fixture = TestBed.createComponent(SemiPermanentTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
