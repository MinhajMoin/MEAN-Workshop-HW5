import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/todo';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'ta-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list: Todo[] = [];
  @Output() delID = new EventEmitter<any>();
  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  removediv(index,id){
    this.snackBar.open("Deleted","", {
      duration: 500,
    });
    this.delID.emit({ID: id, Index: index});
  }
}
