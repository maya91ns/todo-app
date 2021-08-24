import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListTableComponent } from './todo-list-table/todo-list-table.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListTableComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
