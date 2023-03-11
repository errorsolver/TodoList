import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo.model';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos: Todo[];
  // todo: Todo;

  ngOnInit(): void{
    this.todos = [
      {
        Id: 1,
        Name: "Todo text 1",
        IsDone: false
      },
      {
        Id: 2,
        Name: "Todo text 2",
        IsDone: false
      },
      {
        Id: 3,
        Name: "Todo text 3",
        IsDone: true
      },
    ]
  }
  
  onEditTodo(todo: Todo):void{}
  onToggleTodo(todo: Todo):void{}
  onSaveTodo(todo: Todo):void{}
}
