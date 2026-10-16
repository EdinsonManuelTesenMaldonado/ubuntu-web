
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PorqueSerVoluntarioComponent } from './porque-ser-voluntario';

describe('PorqueSerVoluntarioComponent', () => {
  let component: PorqueSerVoluntarioComponent;
  let fixture: ComponentFixture<PorqueSerVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorqueSerVoluntarioComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PorqueSerVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
