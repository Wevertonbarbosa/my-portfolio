import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { TuiTabBar } from '@taiga-ui/addon-mobile';
import { TuiButton } from '@taiga-ui/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tabs-mobile',
  standalone: true,
  imports: [
    TuiButton,
    TuiTabBar,
    FormsModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './tabs-mobile.component.html',
  styleUrl: './tabs-mobile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsMobileComponent implements OnInit {
  @Output() changePageEvent = new EventEmitter<number>();
  public currentTab = '';
  ngOnInit() {
    this.changePage(1);
  }

  changePage(page: number) {
    this.changePageEvent.emit(page);
    if (page == 1) {
      this.currentTab = '--tui-tab-1: var(--tui-active-color);';
    } else {
      this.currentTab = '';
    }
  }
}
