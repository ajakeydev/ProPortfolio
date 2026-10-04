import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectShotsSceneGraph } from './project-shots-scene-graph';

describe('ProjectShotsSceneGraph', () => {
  let component: ProjectShotsSceneGraph;
  let fixture: ComponentFixture<ProjectShotsSceneGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectShotsSceneGraph],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectShotsSceneGraph);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
