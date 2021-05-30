// app.compoment.spec.ts
import { TestBed, async } from '@angular/core/testing'; // 1
import { JokesComponent } from './jokes.component';

describe('JokesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JokesComponent],
    }).compileComponents();
  }));

  it('should create jokes component', () => {
    const fixture = TestBed.createComponent(JokesComponent);
    const jokes = fixture.debugElement.componentInstance;
    expect(jokes).toBeTruthy();
  });
});
