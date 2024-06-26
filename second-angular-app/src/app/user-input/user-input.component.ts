import { Component, EventEmitter, Output } from '@angular/core';

import { type UserInput } from './user-input.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<UserInput>();
  valueCurrent: UserInput = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  };
  onSubmit() {
    this.calculate.emit(this.valueCurrent);
  }
}
