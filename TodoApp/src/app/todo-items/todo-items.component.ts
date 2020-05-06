import { TodoItem } from './../todoItem';
import { Component, OnInit } from '@angular/core';

import { TodoItemService } from '../todoitem.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss'],
})
export class TodoItemsComponent implements OnInit {
  constructor(private todoItemService: TodoItemService) {}

  items: TodoItem[];

  ngOnInit(): void {
    this.getTodoItems();
  }

  getTodoItems(): void {
    this.todoItemService.getItems().subscribe((items) => (this.items = items));
  }

  add(item) {
    this.todoItemService.addTodoItem(item);
  }

  complete(item) {
    this.todoItemService.updateTodoItem(item);
  }
}
