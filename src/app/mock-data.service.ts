import { Injectable } from '@angular/core';
export interface toDo{
  name:string,
  done:boolean,
  id:number
}

@Injectable({
  providedIn: 'root'
})



export class MockDataService {
  list:toDo[] =[
    {
      name:"toDo1",
      done:false,
      id:0
    },
    {
      name:"clean room",
      done:true,
      id:1
    },   
     {
      name:"shoping",
      done:false,
      id:2
    }
  ]
  currentID:number = 2;
  constructor() { }
}
