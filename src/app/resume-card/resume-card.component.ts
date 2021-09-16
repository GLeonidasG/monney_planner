import { Component, Input, OnInit } from '@angular/core';
import { EntryModel } from '../models/entry-model';

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.scss'],
})
export class ResumeCardComponent implements OnInit {
  @Input() incomes = 0;
  @Input() outcomes = 0;

  private totalBalance = this.incomes - this.outcomes;

  constructor() {}
  ngOnInit() {}

  public get getPercentage(): string {
    const percentage = (this.outcomes * 100) / this.incomes;
    return percentage.toFixed(1);
  }

  public get getRawPercentage(): number {
    return Number(this.getTotalOutcome) / Number(this.getTotalIncome);
  }

  public get getTotalIncome(): string {
    return this.incomes.toFixed(2);
  }

  public get getTotalOutcome(): string {
    return this.outcomes.toFixed(2);
  }

  public get getTotalBalance(): string {
    return (this.incomes - this.outcomes).toFixed(2);
  }

  public get resumeStatus() {
    const percentage = (this.outcomes * 100) / this.incomes;
    return percentage < 45
      ? { status: 'gastando menos', color: 'success', icon: 'thumbs-up-sharp' }
      : percentage > 65
      ? { status: 'gastando mais', color: 'danger', icon: 'thumbs-down-sharp' }
      : {
          status: 'començando a gastar mais',
          color: 'warning',
          icon: 'warning',
        };
  }
}
