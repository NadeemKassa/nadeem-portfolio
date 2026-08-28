import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'technical-showcase',
  templateUrl: './technical-showcase.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './technical-showcase.scss',
})
export class TechnicalShowcase {
  // Tracks which technical showcase tab is currently open
  activeTab: 'api' | 'azure' | 'sql' = 'api';

  setTab(tab: 'api' | 'azure' | 'sql') {
    this.activeTab = tab;
  }
}
