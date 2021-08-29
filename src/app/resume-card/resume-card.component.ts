import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.scss'],
})
export class ResumeCardComponent implements OnInit {
  private totalIncome = 5000;
  private totalOutcome = 1000;
  private totalBalance = this.totalIncome - this.totalOutcome;
  private percentage = (this.totalOutcome * 100) / this.totalIncome;

  constructor() {}

  public get getPercentage(): string {
    return this.percentage.toFixed(1);
  }

  public get getRawPercentage(): number {
    return this.percentage / 100;
  }

  public get getTotalIncome(): string {
    return this.totalIncome.toFixed(2);
  }

  public get getTotalOutcome(): string {
    return this.totalOutcome.toFixed(2);
  }

  public get getTotalBalance(): string {
    return this.totalBalance.toFixed(2);
  }

  public get resumeStatus() {
    return this.percentage < 45
      ? { status: 'gastando menos', color: 'success', icon: 'thumbs-up-sharp' }
      : this.percentage > 65
      ? { status: 'gastando mais', color: 'danger', icon: 'thumbs-down-sharp' }
      : {
          status: 'començando a gastar mais',
          color: 'warning',
          icon: 'warning',
        };
  }

  ngOnInit() {}
}
