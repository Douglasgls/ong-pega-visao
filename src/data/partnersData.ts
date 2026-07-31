import type { Partner, TimelineEvent } from '../types';

export const partnersData: Partner[] = [
  {
    id: 'coletivo-periferia-unida',
    name: 'Coletivo Periferia Unida',
    category: 'Parceiro Comunitário',
    description: 'Rede local de articulação para ações de impacto e festivais urbanos.',
    logoText: 'CPU'
  },
  {
    id: 'fundacao-cultura-viva',
    name: 'Fundação Cultura Viva',
    category: 'Fomento Cultural',
    description: 'Apoio ao desenvolvimento das oficinas de artes cênicas e dança urbana.',
    logoText: 'FCV'
  },
  {
    id: 'instituto-cidadania-ativa',
    name: 'Instituto Cidadania Ativa',
    category: 'Formação & Direitos',
    description: 'Parceria técnica em formações sobre direitos humanos e capacitação de lideranças.',
    logoText: 'ICA'
  },
  {
    id: 'escola-publica-comunitaria',
    name: 'Rede de Escolas Públicas',
    category: 'Educação',
    description: 'Espaços parceiros para apresentações itinerantes e captação de estudantes.',
    logoText: 'REP'
  }
];

export const timelineData: TimelineEvent[] = [
  {
    year: '2019',
    title: 'O Início do Movimento',
    title: 'Início do Coletivo Pega a Visão',
    description: 'Grupo de jovens e educadores periféricos se reúne voluntariamente para organizar rodas de conversa e oficinas de arte nas ruas.',
    badge: 'Fundação'
  },
  {
    year: '2021',
    title: 'Criação da Trupe Pega a Visão',
    description: 'Consolidação do braço artístico com a formação da primeira turma da Trupe de teatro de rua e intervenções performáticas.',
    badge: 'Expansão'
  },
  {
    year: '2023',
    title: 'Formalização & Projeto Reconectar',
    description: 'O coletivo se formaliza institucionalmente como ONG e lança o programa contínuo de formação e resgate de direitos Reconectar e Resistir.',
    badge: 'Institucional'
  },
  {
    year: '2025-2026',
    title: 'Consolidação e Impacto Multiplicado',
    description: 'Atendimento direto a mais de 5.000 jovens, ampliação da rede de parceiros e consolidação do site institucional e canal de doações.',
    badge: 'Hoje'
  }
];
