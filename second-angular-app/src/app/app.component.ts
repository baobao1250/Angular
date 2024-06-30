import { AppService } from './app.service';
import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { type UserInput } from './user-input/user-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent],
})
export class AppComponent {
  private appService = inject(AppService);
  dataShow: any[] = [];

  onShowCalculate = (value: UserInput) => {
    let rs = this.appService.calculateInvestmentResults(value);
    console.log(rs);

    this.dataShow = rs;
  };
}
