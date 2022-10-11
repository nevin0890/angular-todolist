import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor(private myapi: ApiService) {
    this.fetchData();
   }
  fetchData = () => {
    this.myapi.viewToDoList().subscribe((data)=>{this.todoData = data})
  }
  
  todoData:any = []

  ngOnInit(): void {
  }

}
