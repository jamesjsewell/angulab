// app.compoment.spec.ts
import { TestBed, async } from '@angular/core/testing'; // 1
import { AnimalsComponent } from './animals.component';

describe('AnimalsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalsComponent],
    }).compileComponents();
  }));

  it('should create animals component', () => {
    const fixture = TestBed.createComponent(AnimalsComponent);
    const jokes = fixture.debugElement.componentInstance;
    expect(jokes).toBeTruthy();
  });
});
