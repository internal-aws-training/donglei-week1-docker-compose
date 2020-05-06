import { Component, OnInit } from '@angular/core';

import { TodoItemService } from '../todoitem.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss'],
})
export class TodoItemsComponent implements OnInit {
  constructor(private todoItemService: TodoItemService) {}

  items = [];

  ngOnInit(): void {
    this.items = this.todoItemService.getItems();
  }

  addToList(item) {
    this.todoItemService.addToList(item);
  }
}
