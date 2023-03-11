import { Component, Input, Output, OnChanges } from '@angular/core';
import { Todo } from '../models/todo.model'
import { TodoField } from '../models/todo-field.model'
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  @Input() todos: Todo[];
  @Output() saveTodo: Todo;
  
  todoForm: FormGroup;
  buildForm():void{
    this.todoForm = new FormGroup({
      [TodoField.ID]: new FormControl(null),
      [TodoField.NAME]: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      [TodoField.IS_DONE]: new FormControl(false)
    })
  }

  ngOnChange():void{}
  
  onSelectTodo(todo: Todo): void{}

  cl(userInput:any){
    console.log(userInput);
  }
}
