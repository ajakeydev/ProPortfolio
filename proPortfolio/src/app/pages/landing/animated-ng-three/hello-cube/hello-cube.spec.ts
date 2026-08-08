import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloCube } from './hello-cube';

describe('HelloCube', () => {
  let component: HelloCube;
  let fixture: ComponentFixture<HelloCube>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloCube],
    }).compileComponents();

    fixture = TestBed.createComponent(HelloCube);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
