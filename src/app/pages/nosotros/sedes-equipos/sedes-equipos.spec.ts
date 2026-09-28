import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedesEquipos } from './sedes-equipos';

describe('SedesEquipos', () => {
  let component: SedesEquipos;
  let fixture: ComponentFixture<SedesEquipos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SedesEquipos],
    }).compileComponents();

    fixture = TestBed.createComponent(SedesEquipos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
