import { TasksService } from './../tasks.service';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancelCreateTask = new EventEmitter<boolean>();
  @Output() add = new EventEmitter<Task>();
  @Output() close = new EventEmitter<boolean>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit(false);
  }

  onAddTask() {
    this.tasksService.addTask({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
    this.close.emit(false);
  }
}
