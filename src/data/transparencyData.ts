import type { FinancialReport, FAQItem } from '../types';

export const financialReports: FinancialReport[] = [
  {
    year: 2025,
    title: 'Relatório Anual de Atividades e Prestação de Contas 2025',
    description: 'Demonstrativo detalhado de receitas, despesas por projeto, auditoria interna e público atendido no exercício de 2025.',
    fileSize: '2.4 MB PDF',
    downloadUrl: '#'
  },
  {
    year: 2024,
    title: 'Relatório Anual de Atividades e Prestação de Contas 2024',
    description: 'Balanço financeiro e prestação de contas dos projetos Trupe Pega a Visão e ações de impacto comunitário.',
    fileSize: '1.9 MB PDF',
    downloadUrl: '#'
  },
  {
    year: 2023,
    title: 'Relatório Anual de Atividades e Prestação de Contas 2023',
    description: 'Relatório institucional de consolidação e expansão dos programas na periferia de São Paulo.',
    fileSize: '1.7 MB PDF',
    downloadUrl: '#'
  }
];

export const transparencyFAQs: FAQItem[] = [
  {
    question: 'Como as doações financeiras são utilizadas?',
    answer: '100% dos recursos arrecadados são destinados à manutenção das atividades diretas com os jovens: compra de materiais artísticos, transporte e alimentação para os participantes dos projetos, remuneração justa de educadores e infraestrutura dos espaços de formação.'
  },
  {
    question: 'A ONG passa por auditoria e prestação de contas regular?',
    answer: 'Sim. Publicamos nossos relatórios financeiros anualmente de forma transparente e acessível a qualquer doador, parceiro ou morador da comunidade.'
  },
  {
    question: 'Empresas e pessoas jurídicas podem apoiar?',
    answer: 'Com certeza! Trabalhamos com parcerias corporativas via investimento direto, patrocínio de projetos específicos e editais de impacto social.'
  },
  {
    question: 'Como acompanhar os resultados dos projetos?',
    answer: 'Mantemos nossas redes sociais e o site sempre atualizados com os indicadores de atendimento,fotos dos eventos e depoimentos dos participantes, além da publicação dos relatórios anuais.'
  }
];
