import { Component, Input } from '@angular/core';
import { InvestmentResults } from './investment-results.model';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input() dataInvestment?: InvestmentResults[];

  get resultsData() {
    if (!this.dataInvestment) return [];
    return this.dataInvestment;
  }
}
