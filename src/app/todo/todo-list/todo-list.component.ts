import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: Todo[]
  @Input() todo: Todo[];

  // @Output() editTodo: Todo;
  // @Output() toggleTodo: Todo;
  @Output() editTodo = new EventEmitter<Todo>();
  @Output() toggleTodo = new EventEmitter<Todo>();
  
  onCheckTodo(todo: Todo):void{}
  onSelectTodo(todo: Todo):void{}

  ngOnInit():void{
    console.warn("todo "+this.todo)
    console.warn("todo ",this.todo)
    console.warn("todos "+this.todos)
    console.warn("todos ",this.todos)
    console.warn("tgtodo "+this.toggleTodo)
    console.warn("tgtodo ",this.toggleTodo)
    console.warn("edtodo "+this.editTodo)
    console.warn("edtodo ",this.editTodo)
  }
}
