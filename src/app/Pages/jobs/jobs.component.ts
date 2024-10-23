import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PreviewComponent } from './Components/preview/preview.component';
import { TuiAppearance, TuiButton, TuiSurface } from '@taiga-ui/core';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [PreviewComponent, TuiAppearance, TuiButton, TuiSurface],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobsComponent {}
