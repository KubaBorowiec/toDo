import { Component, OnInit } from '@angular/core';
import {MockDataService, toDo} from '../mock-data.service'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  public toDoList:toDo[];
  public error:string;
  public currentID:number;
  constructor(private data:MockDataService) {
    this.toDoList = data.list;
    this.currentID = data.currentID  
   }

  ngOnInit(): void {
    
  }
  addToDo(name):void{
    this.error="";
   if(name.trim() !=""){
    this.currentID++;
    this.toDoList.push({
        id:this.currentID,
        name:name,
        done:false
    })}
    else{
      this.error="Pleas enter to to task"
    }
  }
  doneToTrue(id){
    console.log(id);
    this.toDoList.find(el=>el.id == id).done=true;
  }

}
