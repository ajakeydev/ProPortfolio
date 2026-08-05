import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedNgThree } from './animated-ng-three';

describe('AnimatedNgThree', () => {
  let component: AnimatedNgThree;
  let fixture: ComponentFixture<AnimatedNgThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedNgThree],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimatedNgThree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
