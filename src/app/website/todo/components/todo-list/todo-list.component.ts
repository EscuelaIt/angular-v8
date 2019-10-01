import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import * as jsPDF from 'jspdf';

import { TodoService } from '@todo/services/todo.service';
import { Todo } from '@todo/models/todo.model';
import { MyValidators } from '@utils/validators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  fieldTitle: FormControl;

  constructor(
    private todoService: TodoService
  ) {
    this.fieldTitle = new FormControl(
      null, // value
      [Validators.minLength(3)], // sync
      [MyValidators.hasTodo(this.todoService)]
    );
  }

  ngOnInit() {
    this.todoService.getAllTodos()
    .subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo() {
    if (this.fieldTitle.valid) {
      const newTodo: Todo = {
        title: this.fieldTitle.value,
        id: '2000',
        userId: '1',
        completed: false
      };
      this.todoService.createTodo(newTodo)
      .subscribe(
        todo => {
          this.todos.unshift(todo);
          this.fieldTitle.setValue('');
        },
        error => {
          console.log(error);
        }
      );
    }
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

  validate(control: AbstractControl) {
    const title = control.value;
    return this.todoService.hasTodo(title).pipe(
      map(hasTodo => {
        if (hasTodo) {
          return { hasTodo: true };
        }
        return null;
      })
    );
  }

  generateFile() {
    const doc = new jsPDF();
    doc.text('Hello world!', 10, 10);
    doc.save('a4.pdf');
  }

}
