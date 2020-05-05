import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';

@NgModule({
  declarations: [AppComponent, TodoItemsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: TodoItemsComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
