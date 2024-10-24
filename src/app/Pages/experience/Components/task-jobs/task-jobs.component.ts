import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiIcon, TuiSurface, TuiTitle, TuiAppearance } from '@taiga-ui/core';
import { TuiConnected, TuiAvatar } from '@taiga-ui/kit';
import { TuiCardMedium } from '@taiga-ui/layout';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task-jobs',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    TuiCardMedium,
    TuiIcon,
    TuiSurface,
    TuiTitle,
    TuiAvatar,
    TuiAppearance,
    TuiConnected,
  ],
  templateUrl: './task-jobs.component.html',
  styleUrl: './task-jobs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskJobsComponent {
  @Input() title: string = '';
  @Input() empresa: string = '';
  @Input() date: string = '';
  @Input() description: string = '';
  @Input() selectedClass: string = '';
}
