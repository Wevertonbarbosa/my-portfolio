import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TuiAppearance, TuiSurface, TuiIcon, TuiHint,TuiButton } from '@taiga-ui/core';
import { TuiCardLarge } from '@taiga-ui/layout';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {
  TuiInputModule,
  TuiTextfieldControllerModule,
  TuiTextareaModule,
} from '@taiga-ui/legacy';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    TuiTextareaModule,
    TuiButton,  
    ReactiveFormsModule,
    TuiAppearance,
    TuiSurface,
    TuiIcon,
    TuiCardLarge,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiHint,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  public formSend!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formSend = this.fb.group({
      from_name: ['', [Validators.required, Validators.minLength(2)]],
      to_name: ['Weverton', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
}
