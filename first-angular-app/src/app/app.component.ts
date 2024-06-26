import { Component } from '@angular/core';
// import { NgFor, NgIf } from '@angular/common';

import { HeaderComponet } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponet, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  private selectedUserId?: string;

  get selectUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser = (id: string) => {
    this.selectedUserId = id;
  };
}
