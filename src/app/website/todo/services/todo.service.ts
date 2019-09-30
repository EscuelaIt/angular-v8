import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '@todo/models/todo.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class TodoService {

  path = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private http: HttpClient
  ) { }

  getAllTodos() {
    return this.http.get<Todo[]>(this.path);
  }

  createTodo(todo: Todo) {
    return this.http.post<Todo>(this.path, todo);
  }

  deleteTodo(todoId: string) {
    const url = `${this.path}/${todoId}`;
    return this.http.delete(url);
  }

  updateTodo(todo: Todo) {
    const url = `${this.path}/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

  hasTodo(title: string): Observable<boolean> {
    return this.getAllTodos()
    .pipe(
      map(todos => {
        const todo = todos.find(item => item.title === title);
        return todo ? true : false;
      })
    );
  }
}
