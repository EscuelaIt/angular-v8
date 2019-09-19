import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '@todo/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() delete = new EventEmitter<string>();
  @Output() update = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }


  deleteTodo() {
    this.delete.emit(this.todo.id);
  }

  updateTodo() {
    this.update.emit(this.todo);
  }
}
