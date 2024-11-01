import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  TuiButton,
  TuiDialog,
  TuiLink,
  TuiAppearance,
  TuiIcon,
  TuiHintDirective,
} from '@taiga-ui/core';
import {
  TuiCarousel,
  TuiPagination,
  TuiAvatar,
  TuiTooltip,
  TuiPulse,
  TuiRating,
} from '@taiga-ui/kit';
import { TuiCardLarge } from '@taiga-ui/layout';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextScrollComponent } from '../../../../Components/text-scroll/text-scroll.component';
@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [
    RouterLink,
    TuiRating,
    TuiHintDirective,
    TuiTooltip,
    TuiIcon,
    CommonModule,
    FormsModule,
    TuiPulse,
    TuiAppearance,
    TuiButton,
    TuiAvatar,
    TuiCardLarge,
    TuiDialog,
    TuiLink,
    TuiCarousel,
    TuiPagination,
    TextScrollComponent,
  ],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideComponent {
  protected open = false;
  protected index = 0;
  protected imgSlide = '';

  constructor() {
    this.returnClass();
  }

  returnClass() {
    switch (this.index) {
      case 0:
        return (this.imgSlide = 'img1');
      case 1:
        return (this.imgSlide = 'img2');
      case 2:
        return (this.imgSlide = 'img3');
      default:
        return (this.imgSlide = 'img4');
    }
  }

  protected onClick(): void {
    this.index = 0;
    this.open = true;
  }

  protected navigate(delta: number): void {
    this.index = (this.index + delta) % 4;
    this.returnClass();
  }

  returnLengthIndex(index: any) {
    this.returnClass();
  }
}
