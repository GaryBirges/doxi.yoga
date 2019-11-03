import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaForBeginnersComponent } from './yoga-for-beginners.component';

describe('YogaForBeginnersComponent', () => {
  let component: YogaForBeginnersComponent;
  let fixture: ComponentFixture<YogaForBeginnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaForBeginnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaForBeginnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
