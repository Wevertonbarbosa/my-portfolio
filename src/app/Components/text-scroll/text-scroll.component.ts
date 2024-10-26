import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {
  TuiAppearance,
  TuiScrollbar,
  TuiTitle,
  TuiSurface,
} from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-text-scroll',
  standalone: true,
  imports: [
    TuiAppearance,
    TuiScrollbar,
    CommonModule,
    TuiSurface,
    TuiTitle,
    TuiCardLarge,
    TuiHeader,
  ],
  templateUrl: './text-scroll.component.html',
  styleUrl: './text-scroll.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextScrollComponent {
  @Input() text: string = '';
  @Input() title: string = '';
}
