import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-recomendacoes',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TruncatePipe],
  templateUrl: './recomendacoes.component.html',
  styleUrl: './recomendacoes.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecomendacoesComponent {

  screenWidth: number = 0;

  // Injeção do PLATFORM_ID para verificar o ambiente
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Verifica se está no navegador e define a largura da tela
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = (event.target as Window).innerWidth;
    }
  }

  listPropostas = [
    {
      title: 'FOMENTO AO EMPREENDEDORISMO',
      description: 'Vamos trabalhar para fortalecer e atrair investimentos a industrial local, especialmente o polo industrial químico atrair novos investimentos, diversificar o comércio gerando emprego e renda a todos os Guaiubanos.',
    },
    {
      title: 'SAÚDE',
      description: 'Na saúde construiremos a maternidade municipal, daremos acesso a exames a toda a população e infraestrutura adequada em nosso postos de saúde, também teremos o saúde ao alcance de todos com medicamentos entregues na porta da sua casa.',
    },
    {
      title: 'EDUCAÇÃO, INFRAESTRUTURA E TECNOLOGIA',
      description: 'Implementação de educação tecnológica nas escolas e melhoria da infraestrutura da conectividade para acesso de toda a população.',
    },
    {
      title: 'MERENDA ESCOLAR E AGRICULTURA LOCAL',
      description: 'Aumentar a quantidade de produtos locais nas escolas e desenvolver um cardápio nutricionalmente equilibrado para os nosso alunos.',
    },
    {
      title: 'AÇÕES DOS PRIMEIROS 120 DIAS INICIAIS DE GESTÃO',
      description: 'Resolver problemas imediatos na infraestrutura e serviço público. Foco na resolução dos problemas sociais e melhoria na coleta de lixo.',
    },
    {
      title: 'COMITÊ DE GESTÃO TÉCNICA',
      description: 'Gestão participativo para que a população possa opinar de perto na transformação de Guaiúba.',
    },
   
  ]

  breakpoints = {
    1400: { slidesPerView: 3 },
    1000: { slidesPerView: 2 },
    600: { slidesPerView: 1 },
    400: { slidesPerView: 1 },
    350: { slidesPerView: 1 },
    200: { slidesPerView: 1 }
  };
}
