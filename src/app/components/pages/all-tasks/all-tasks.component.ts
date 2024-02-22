import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { DatePipe } from '@angular/common';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [FormsModule, DatePipe, PageTitleComponent,TaskListComponent],
  templateUrl: './all-tasks.component.html',
  styles: ''
})
export class AllTasksComponent {
  newTask="";
  taskList:any[]=[];
  httpService=inject(HttpService);
  ngOnInit(){
    this.getAllTasks();
  }
  addTask(){
    console.log("add task",this.newTask);
    this.httpService.addTask(this.newTask).subscribe(()=>{
      this.newTask="";
      this.getAllTasks();
    })
  }
  getAllTasks(){
    this.httpService.getAllTasks().subscribe((result:any)=>{
      this.taskList=result;
    })
  }
  onComplete(task:any){
    task.complete=true;
    console.log("complete",task);
    this.httpService.updateTask(task).subscribe(()=>{
      
    })
  }
  onImportant(task:any){
    task.important=true;
    console.log("important",task);
    this.httpService.updateTask(task).subscribe(()=>{
  
    })
  }
}
