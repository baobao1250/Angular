import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type Task } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  // private taskService = new TaskService(); // khi gọi sẽ tạo ra 1 đối
  // tượng ở đây và ko chia sẽ ra ngoài.
  // Nên mỗi lần gọi sẽ tạo ta 1 đối tượng mới

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  OnCompleteTask(taskId: string) {
    return this.tasksService.removeTask(taskId);
  }

  OnOpenDialog(isClosed: boolean) {
    this.isAddingTask = isClosed;
  }
  // OnAddTask(task: Task) {
  //   this.isAddingTask = false;
  //   return this.taskService.addTask(task);
  // }
}
