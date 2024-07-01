import { AppService } from './app.service';
import { Component, inject } from '@angular/core';
import { type UserInput } from './user-input/user-input.model';
import { type InvestmentResults } from './investment-results/investment-results.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
