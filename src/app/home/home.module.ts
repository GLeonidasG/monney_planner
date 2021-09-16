import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ResumeCardComponent } from '../resume-card/resume-card.component';
import { HistoryCardComponent } from '../history-card/history-card.component';
import { EntryTypeSelectorPipe } from '../pipes/entry-type-selector.pipe';
import HistoryCardModule from '../history-card/history-card.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, HistoryCardModule],
  declarations: [HomePage, ResumeCardComponent, HistoryCardComponent, EntryTypeSelectorPipe],
})
export class HomePageModule {}
