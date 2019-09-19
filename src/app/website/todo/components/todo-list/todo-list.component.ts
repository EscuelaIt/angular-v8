import { Component, OnInit } from '@angular/core';

import { TodoService } from '@todo/services/todo.service';
import { Todo } from '@todo/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  title: string;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.getAllTodos()
    .subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo() {
    const newTodo: Todo = {
      title: this.title,
      id: '2000',
      userId: '1',
      completed: false
    };
    this.todoService.createTodo(newTodo)
    .subscribe(
      todo => {
        this.todos.unshift(todo);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateTodo() {
    // code
  }

  onDeleteTodo(todoId: string, index: number) {
    this.todoService.deleteTodo(todoId)
    .subscribe(rta => {
      this.todos.splice(index, 1);
    });
  }

  onUpdateTodo(todo: Todo, index: number) {
    this.todoService.updateTodo(todo)
    .subscribe(todoUpdated => {
      this.todos[index] = todoUpdated;
    });
  }

}
