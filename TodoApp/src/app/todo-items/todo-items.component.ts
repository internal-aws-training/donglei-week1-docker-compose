import { Component, OnInit } from '@angular/core';

import { todoItems } from '../todoitems';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss'],
})
export class TodoItemsComponent implements OnInit {
  constructor() {}

  items = todoItems;

  ngOnInit(): void {}
}
