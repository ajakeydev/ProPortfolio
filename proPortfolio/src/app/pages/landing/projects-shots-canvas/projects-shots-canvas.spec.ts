import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsShotsCanvas } from './projects-shots-canvas';

describe('ProjectsShotsCanvas', () => {
  let component: ProjectsShotsCanvas;
  let fixture: ComponentFixture<ProjectsShotsCanvas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsShotsCanvas],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsShotsCanvas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
