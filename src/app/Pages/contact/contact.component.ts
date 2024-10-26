import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {
  TuiAppearance,
  TuiSurface,
  TuiIcon,
  TuiHint,
  TuiButton,
  TuiAlertService,
} from '@taiga-ui/core';
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

import emailjs from '@emailjs/browser';
import { DataSend } from '../../Interface/data-send';

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
  private readonly alerts = inject(TuiAlertService);

  constructor(private fb: FormBuilder) {
    this.formSend = this.fb.group({
      from_name: ['', [Validators.required, Validators.minLength(2)]],
      to_name: ['Weverton', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  async sendEmail() {
    debugger;
    if (this.formSend.valid) {
      const data: DataSend = this.formSend.value;
      emailjs.init('R4-AERDn4Hg4JNTdg');
      try {
        let response = await emailjs.send(
          'service_dknxng4',
          'template_rkdztah',
          {
            from_name: this.formSend.value.from_name,
            to_name: this.formSend.value.to_name,
            from_email: this.formSend.value.from_email,
            message: this.formSend.value.message,
          }
        );

        this.formSend.disable();
        this.formSend.reset();
        this.alerts
          .open('<i>Muito obrigado pela mensagem!</i>', {
            label: 'Em breve entro em contato',
            appearance: 'success',
          })
          .subscribe();
      } catch (error) {
        this.alerts.open(
          '<i>Desculpa, tivemos um erro no envio do email!</i>',
          {
            label: 'Já irei ajustar',
            appearance: 'negative',
          }
        );
        console.log(error);
      }
    } else {
      this.alerts.open(
        '<i>Algum erro inesperado aconteceu, breve ajuste!</i>',
        {
          label: 'Já irei ajustar',
          appearance: 'negative',
        }
      );
    }
  }
}
