import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss'
})
export class AllTasksComponent {
  newTask="";
  httpService=inject(HttpService);
  addTask(){
    console.log("add task",this.newTask);
    this.httpService.addTask(this.newTask).subscribe(()=>{
      console.log("added");
    })
  }
}
