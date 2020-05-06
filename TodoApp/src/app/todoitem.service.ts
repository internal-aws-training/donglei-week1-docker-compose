import { TodoItem } from './todoItem';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoItemService {
  private todoItemsUrl = environment.apiUrl + '/api/todoitems'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getItems(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.todoItemsUrl);
  }

  /** POST: add a new todo item to the server */
  addTodoItem(item: TodoItem): Observable<TodoItem> {
    return this.http
      .post<TodoItem>(this.todoItemsUrl, item, this.httpOptions)
      .pipe(
        tap((newItem: TodoItem) =>
          console.log(`added item w/ id=${newItem.id}`)
        ),
        catchError(this.handleError<TodoItem>('addTodoItem'))
      );
  }

  /** PUT: update the item on the server */
  updateTodoItem(item: TodoItem): Observable<any> {
    return this.http.put(this.todoItemsUrl, item, this.httpOptions).pipe(
      tap((_) => console.log(`updated item id=${item.id}`)),
      catchError(this.handleError<any>('updateTodoItem'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
