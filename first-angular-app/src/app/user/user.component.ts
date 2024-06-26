import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  input,
  output,
} from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // signal
  // // // input event
  // id = input.required<string>();
  // name = input.required<string>();
  // avatar = input.required<string>();
  // // // out event
  // select = output<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
