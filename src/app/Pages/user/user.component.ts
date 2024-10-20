import { Component } from '@angular/core';
import { MenuComponent } from "../../Components/menu/menu.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
