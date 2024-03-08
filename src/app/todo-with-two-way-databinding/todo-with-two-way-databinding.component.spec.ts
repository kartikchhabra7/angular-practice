import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWithTwoWayDatabindingComponent } from './todo-with-two-way-databinding.component';

describe('TodoWithTwoWayDatabindingComponent', () => {
  let component: TodoWithTwoWayDatabindingComponent;
  let fixture: ComponentFixture<TodoWithTwoWayDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoWithTwoWayDatabindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoWithTwoWayDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
