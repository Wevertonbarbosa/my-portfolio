import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TuiIcon, TuiSurface, TuiTitle, TuiAppearance } from '@taiga-ui/core';

import {
  TuiStepper,
  TuiConnected,
  TuiAvatar,
  TuiStepperComponent,
  TuiStep,
} from '@taiga-ui/kit';
import { TuiCardMedium } from '@taiga-ui/layout';
import { NgFor } from '@angular/common';
import { TaskJobsComponent } from '../task-jobs/task-jobs.component';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    TuiAvatar,
    TuiStepper,
    TuiAppearance,
    TuiConnected,
    ReactiveFormsModule,
    TuiCardMedium,
    TuiIcon,
    TuiSurface,
    TuiTitle,
    TaskJobsComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  protected readonly steps = ['Freelancer', 'Totvs', 'Totvs', 'Ericsson'];
  protected readonly ocupation = [
    'Freelancer',
    'Tec. Desenvolvimento de Software',
    'Trainee',
    'Jovem Aprendiz',
  ];
  public valueStep: number = 0;

  protected empresa!: string;
  protected title!: string;
  protected date!: string;
  protected description!: string;
  public selectedClass = '';

  protected descriptJobFreelas = `Fazendo ainda`;
  protected descriptJobTotvs1 = `Experiência com desenvolvimento de soluções escaláveis no sistema ERP Protheus, utilizando a linguagem
          ADVPL (TOTVS).
          <br>
          <br>
          Experiência com integrações de APIs no Front End com framework angular.

          <br>
          <br>
          Experiência em elaboração de documentos técnicos detalhados para documentar processos e procedimentos.
          <br>
          <br>
          Experiência com resoluções de problemas complexos, incluindo identificação e correção de bugs, depuração e
          abordagem de questões relacionadas à lógica de programação.
          <br>
          <br>
          Criei e mantive interfaces do sistema, utilizando o framework Angular com PO-UI (TOTVS).
          <br>
          <br>
          Experiência com metodologias ágeis Scrum e Kanban, participando de reuniões diárias, retrospectivas e
          planejamentos de sprint.`;

  protected descriptJobTotvs2 = `
  Treinamento intensivo de Softs Skills e Hard Skills
  <br>
  <br>
  Prática no dia a dia no setor de Prestadores de serviços na TOTVS.
  <br>
  <br>
  Desenvolvendo um app em um squad do 0, sendo coordenado pelos padrinhos e madrinhas da TOTVS que estão nos apoiando e ensinando as regras de negócio a gestão do projeto, trabalho em equipe, estamos recebendo auxílio da agilista para desenvolvermos o projeto utilizando metodologia ágeis, seguindo um modelo de protótipo desenvolvido pela nossa UI.
  `;

  protected descriptJobEricsson = `
    Responsável pelas elaboração, atualização e criação de planilhas de controle Excel
    <br>
    <br>
    Preenchimentos de documentos no Word
    <br>
    <br>
    Negociações e cobranças á empresas, com atendimento telefone ou email
    <br>
    <br>
    Organização de arquivos
    <br>
    <br>
    Rotinas Administrativas
    <br>
    <br>
    Controle e criação de acesso a técnico, através dos sistemas operacionais.
  `;

  constructor() {
    this.chooseJob(this.valueStep);
  }

  chooseJob(value: any) {
    if (value === 0) {
      this.empresa = this.steps[value];
      this.title = this.ocupation[value];
      this.date = `07/2024 - atualmente`;
      this.description = this.descriptJobFreelas;
      this.selectedClass = 'freelancer';
    } else if (value === 1) {
      this.empresa = this.steps[value];
      this.title = this.ocupation[value];
      this.date = `08/2023 até 03/2024`;
      this.description = this.descriptJobTotvs1;
      this.selectedClass = 'totvs1';
    } else if (value === 2) {
      this.empresa = this.steps[value];
      this.title = this.ocupation[value];
      this.date = `10/2022 até 04/2023`;
      this.description = this.descriptJobTotvs2;
      this.selectedClass = 'totvs2';
    } else if (value === 3) {
      this.empresa = this.steps[value];
      this.title = this.ocupation[value];
      this.date = `10/2017 até 09/2018`;
      this.description = this.descriptJobEricsson;
      this.selectedClass = 'ericsson';
    }
  }
}
