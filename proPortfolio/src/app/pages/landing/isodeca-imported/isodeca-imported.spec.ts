import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsodecaImported } from './isodeca-imported';

describe('IsodecaImported', () => {
  let component: IsodecaImported;
  let fixture: ComponentFixture<IsodecaImported>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsodecaImported],
    }).compileComponents();

    fixture = TestBed.createComponent(IsodecaImported);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
