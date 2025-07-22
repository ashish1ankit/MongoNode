import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [CommonModule,FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  Todo(){}
  isStrickThrough=false;
  toggleStrciThroughNoteClass(){
    this.isStrickThrough=!this.isStrickThrough;
  }
listData=[{
  id:1,
  name:'test',
  ndate: '22/072025'
},{
  id:2,
  name:'test captial',
  ndate: '23/07/2025'
}]
addListEntry(){
this.listData.push({id:this.listData.length+1,name:'New Task',ndate:'23/07/2025'});
}

}
