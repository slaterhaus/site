import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseBlockComponent } from './phase-block.component';

describe('PhaseBlockComponent', () => {
  let component: PhaseBlockComponent;
  let fixture: ComponentFixture<PhaseBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhaseBlockComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
