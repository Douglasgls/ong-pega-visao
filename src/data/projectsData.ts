import type { Project } from '../types';

import sport from '../assets/Esporte.jpeg';
import arteCulturaImg from '../assets/arte-cultura.jpeg';
import reconectarImg from '../assets/reconectar-e-resistir-1-768x960.png';
import conversaImg from '../assets/mulher-conversando-com-jovems.jpg';
import grupoImg from '../assets/grupo-pega-visao.jpg';

export const projectsData: Project[] = [
  {
    id: 'esporte',
    title: 'Futebol em Ação',
    category: 'Esporte e Cidadania',
    summary: 'Práticas esportivas coletivas que fortalecem o bem-estar, o trabalho em equipe, a disciplina e a descoberta de novos caminhos para o futuro.',
    description: 'O projeto Esporte em Ação é uma iniciativa esportiva que utiliza o futebol como ferramenta de empoderamento, voz e vivência para jovens da periferia. Com ensaios semanais, a equipe cria produções autorais que circulam por praças, escolas públicas e espaços culturais independentes.',
    image: sport,
  },
  {
    id: 'reconectar-e-resistir',
    title: 'Um Salve Salva!',
    category: 'Formação & Direitos',
    summary: 'Cuidado psicossocial em rodas de conversa mediadas por psicólogos. Aborda masculinidades, negritude, bem-estar emocional, autocuidado e projetos de vida com base na escuta horizontal.',
    description: 'O projeto Reconectar e Resistir promove encontros de formação crítica, rodas de conversa sobre direitos humanos, racismo estrutural e ocupação de espaços urbanos. Através da escuta ativa e facilitação profissional, estimulamos os participantes a construírem soluções comunitárias.',
    image: reconectarImg,
  },
  {
    id: 'arte-e-periferia',
    title: 'Teatro, Arte & Cultura',
    category: 'Cultura Urbana',
    summary: 'Experiências culturais que aproximam os jovens da arte, da criatividade e de novas formas de ver o mundo.',
    description: 'Fomentamos a cultura hip-hop em todas as suas vertentes: MCing, DJing, Breaking e Grafite. As oficinas proporcionam ferramentas técnicas para que a juventude expresse suas vivências com qualidade técnica e estética transformadora.',
    image: arteCulturaImg,
  },
  {
    id: 'dialogos-e-cidadania',
    title: 'Diálogos de Cidadania & Formação',
    category: 'Educação & Oportunidades',
    summary: 'Mentoria, orientação para o primeiro emprego e desenvolvimento de habilidades interpessoais.',
    description: 'Apoiamos jovens periféricos na transição para o mercado de trabalho formal, empreendedorismo periférico e acesso à universidade através de capacitações práticas, elaboração de currículos e simulação de entrevistas.',
    image: conversaImg,
  },
  {
    id: 'coletivo-pega-a-visao',
    title: 'Coletivo em Ação nas Ruas',
    category: 'Mobilização Social',
    summary: 'Ações de impacto direto nas ruas, arrecadação de insumos e festivais de cultura independente.',
    description: 'Unimos forças para realizar festivais de rua gratuitos, intervenções poéticas, distribuição de cestas básicas e material escolar, garantindo presença ativa e acolhimento nas comunidades mais vulneráveis.',
    image: grupoImg,
  }
];
