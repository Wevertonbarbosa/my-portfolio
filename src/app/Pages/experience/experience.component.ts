import { Component } from '@angular/core';
import { TuiAppearance, TuiButton, TuiSurface } from '@taiga-ui/core';
import { CardComponent } from "./Components/card/card.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TuiAppearance, CardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

}
