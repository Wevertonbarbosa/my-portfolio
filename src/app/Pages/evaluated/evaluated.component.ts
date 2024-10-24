import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TuiAppearance, TuiSurface } from '@taiga-ui/core';
import { SlideComponent } from "./Components/slide/slide.component";

@Component({
  selector: 'app-evaluated',
  standalone: true,
  imports: [TuiSurface, TuiAppearance, SlideComponent],
  templateUrl: './evaluated.component.html',
  styleUrl: './evaluated.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvaluatedComponent {}
