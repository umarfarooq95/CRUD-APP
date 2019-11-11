import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

todos: Todo[] = [
  {
    id: 1,
    taskName: 'Wake Up',
    status: 'Not Done',
    done: false
  },
  {
    id: 2,
    taskName: 'Brush',
    status: 'Done',
    done: true
  },
  {
    id: 3,
    taskName: 'Studying',
    status: 'Not Done',
    done: false
  }
];

constructor() { }

public getTodos(): Todo[] {
  return this.todos;
}

public addTodo(todoData: Todo): void {
  todoData.id = this.todos.length + 1;
  this.todos.push(todoData);
}

public updateTodoStatus(id: number): void {
  const todoData =   this.todos.find((todo) => todo.id === id);
  todoData.done = !todoData.done;
  todoData.status =  todoData.done ? 'Done' : 'Not Done';
  const index = this.todos.findIndex((todo) => todo.id === id);
  this.todos.splice(index, 1, todoData);
}

}
