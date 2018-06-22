import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'ta-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent implements OnInit {
  placholderVal = 'Enter your Tasks for Today';
  newTodoVal = '';
  @Output() todoAdded = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    if (this.newTodoVal.length>0)
    {
      console.log(this.newTodoVal);
      this.todoAdded.emit(this.newTodoVal);
      this.newTodoVal='';
    }
  }

}
