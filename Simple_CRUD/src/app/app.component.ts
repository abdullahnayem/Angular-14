import { Component } from '@angular/core';
import { Todo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple_CRUD';

  todoList: Todo[]=[];
  todo: Todo=this.initTodo;
  get initTodo():Todo{
    return{
      Title:'',
      Id:0
    }
  }
  AddtodoList(){
    debugger
    if(this.todo.Id){
      //update Logic
      this.todoList= this.todoList.map(
        o=>{
          if(o.Id==this.todo.Id){
            o.Title=this.todo.Title
          }
          return o;
        }
      )
      console.log(this.todo.Title);
      console.log(this.todoList);
    }
    else{
      //this.todo.Id = this.todoList.length +1 ;
      this.todo.Id = Date.now() ;
      this.todoList.push({...this.todo});
    }
    console.log(this.todoList);
    this.  todo= this.initTodo;
  }
  Edit(item: Todo){
    this.todo={...item};
  }
  Delete(Id:number){
    this.todoList=this.todoList.filter(o=>o.Id!=Id)
  }
}
