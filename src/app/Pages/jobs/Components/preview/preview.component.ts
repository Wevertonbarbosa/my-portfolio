import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgFor } from '@angular/common';
import { TuiSwipe } from '@taiga-ui/cdk';
import { TuiButton, TuiSurface } from '@taiga-ui/core';
import { TuiCardLarge } from '@taiga-ui/layout';
import {
  TuiPreview,
  TuiPreviewDialogDirective,
  TuiCarousel,
  TuiPagination,
  TuiAvatar,
  TuiLike,
  TuiRating,
} from '@taiga-ui/kit';
import {
  PolymorpheusOutlet,
  PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    TuiLike,
    TuiButton,
    TuiAvatar,
    TuiRating,
    TuiSurface,
    TuiCardLarge,
    TuiCarousel,
    TuiPagination,
    TuiPreviewDialogDirective,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
    TuiPreview,
    TuiSwipe,
  ],
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewComponent {
  protected index = 0;
  protected readonly items: {
    title: string;
    content: SafeResourceUrl;
    note: any;
  }[] = [];
  protected value = [];

  constructor(private sanitizer: DomSanitizer) {
    this.items = [
      {
        title: 'Landing Page Simulador de Pix',
        content: this.sanitizeUrl(
          'https://www.behance.net/embed/project/210555087?ilo0=1'
        ),
        note: this.value,
      },
      {
        title: 'Formulário Emitente',
        content: this.sanitizeUrl(
          'https://www.behance.net/embed/project/208060083?ilo0=1'
        ),
        note: this.value,
      },
      {
        title: 'Fintech App',
        content: this.sanitizeUrl(
          'https://www.behance.net/embed/project/175561529?ilo0=1'
        ),
        note: this.value,
      },
      {
        title: 'App Tropa do Café',
        content: this.sanitizeUrl(
          'https://www.behance.net/embed/project/175560435?ilo0=1'
        ),
        note: this.value,
      },
      {
        title: 'App All For Food',
        content: this.sanitizeUrl(
          'https://www.behance.net/embed/project/175558939?ilo0=1'
        ),
        note: this.value,
      },
      {
        title: 'App Portfólio Mobile',
        content: this.sanitizeUrl(
          'https://www.behance.net/embed/project/175555585?ilo0=1'
        ),
        note: this.value,
      },
      {
        title: 'E-commerce',
        content: this.sanitizeUrl(
          'https://www.behance.net/embed/project/155864237?ilo0=1'
        ),
        note: this.value,
      },
      {
        title: 'Well Camp',
        content: this.sanitizeUrl(
          'https://www.behance.net/embed/project/154866727?ilo0=1'
        ),
        note: this.value,
      },
      {
        title: 'Well Cine',
        content: this.sanitizeUrl(
          'https://www.behance.net/embed/project/153991411?ilo0=1'
        ),
        note: this.value,
      },
      {
        title: 'Buzz Feed',
        content: this.sanitizeUrl(
          'https://www.behance.net/embed/project/175566889?ilo0=1'
        ),
        note: this.value,
      },
      {
        title: 'Blog Marvel',
        content: this.sanitizeUrl(
          'https://www.behance.net/embed/project/175565793?ilo0=1'
        ),
        note: this.value,
      },
    ];
  }

  protected readonly itemsCount = 3;

  protected get rounded(): number {
    return Math.floor(this.index / this.itemsCount);
  }

  protected onIndex(index: number): void {
    this.index = index * this.itemsCount;
  }

  private sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
