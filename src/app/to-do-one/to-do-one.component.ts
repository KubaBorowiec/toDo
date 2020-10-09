import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-to-do-one',
  templateUrl: './to-do-one.component.html',
  styleUrls: ['./to-do-one.component.scss']
})

export class ToDoOneComponent implements OnInit {
  @Input() toDo
  @Output() onCheckboxDone= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  clickCheck(id) {  
    this.onCheckboxDone.emit(id);
  }


}
