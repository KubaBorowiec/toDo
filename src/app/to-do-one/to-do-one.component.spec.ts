import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoOneComponent } from './to-do-one.component';

describe('ToDoOneComponent', () => {
  let component: ToDoOneComponent;
  let fixture: ComponentFixture<ToDoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
