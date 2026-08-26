import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hellogltf } from './hellogltf';

describe('Hellogltf', () => {
  let component: Hellogltf;
  let fixture: ComponentFixture<Hellogltf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hellogltf],
    }).compileComponents();

    fixture = TestBed.createComponent(Hellogltf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
