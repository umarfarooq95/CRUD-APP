import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];
  taskName = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  onAddTodo() {
    if (!this.taskName) { return; }
    const TodoObj = {
      taskName : this.taskName,
      status : 'Not Done',
      done : false
    };
    this.todoService.addTodo(TodoObj);
    this.taskName = '';
  }

  onUpdateTodo(todo: Todo) {
    this.todoService.updateTodoStatus(todo.id);
  }

}
