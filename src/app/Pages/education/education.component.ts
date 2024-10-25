import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAppearance, TuiSurface, TuiIcon } from '@taiga-ui/core';
import { TuiCardLarge } from '@taiga-ui/layout';
import { TuiAvatar, TuiPulse } from '@taiga-ui/kit';
import { TuiTable } from '@taiga-ui/addon-table';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    TuiTable,
    TuiPulse,
    TuiAppearance,
    TuiCardLarge,
    TuiSurface,
    TuiIcon,
    TuiAvatar,
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  protected readonly data = [
    {
      name: 'Tecnologia da informação',
      balance: 'Trabalho em equipe',
    },
    {
      name: 'Modelagem de dados',
      balance: 'Solução de problemas técnicos',
    },
    {
      name: 'Desenvolvimento Java',
      balance: 'Comunicação',
    },
    {
      name: 'Serviços Web RESTful',
      balance: 'Gestão de projetos',
    },
    {
      name: 'Lógica',
      balance: 'Banco de dados',
    },
    {
      name: 'Kotlin',
      balance: 'Tableau',
    },
    {
      name: 'Azure Devops',
      balance: 'Docker',
    },
    {
      name: 'Testes automatizados',
      balance: 'Testes unitários',
    },


  ] as const;

  protected readonly columns = Object.keys(this.data[0]);
}
