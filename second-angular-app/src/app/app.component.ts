import { AppService } from './app.service';
import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { type UserInput } from './user-input/user-input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { type InvestmentResults } from './investment-results/investment-results.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  private appService = inject(AppService);
  dataShow: InvestmentResults[] = [];

  onShowCalculate = (value: UserInput) => {
    let rs: InvestmentResults[] =
      this.appService.calculateInvestmentResults(value);
    console.log(rs);

    this.dataShow = rs;
  };
}
