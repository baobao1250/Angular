import { Component, Input } from '@angular/core';
import { InvestmentResults } from './investment-results.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
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