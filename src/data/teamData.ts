import type { TeamMember } from '../types';

import alinneImg from '../assets/equipe/alinne.jpg';
import deboraImg from '../assets/equipe/debora.png';
import milhemImg from '../assets/equipe/Milhem-Cortaz_FCASA-68-1024x683.jpg';

export const teamData: TeamMember[] = [
  {
    id: 'alinne-silva',
    name: 'Alinne Silva',
    role: 'Coordenadora de Projetos & Fundadora',
    bio: 'Educadora social, produtora cultural e articuladora comunitária. Atua há mais de 10 anos no desenvolvimento de tecnologias sociais para a juventude da periferia.',
    image: alinneImg,
    socialLinks: {
      instagram: 'https://instagram.com/i.pegavisao',
      linkedin: 'https://www.linkedin.com/alinnealmeida',
      email: 'institutopegavisao@gmail.com'
    }
  },
  {
    id: 'debora-santos',
    name: 'Débora Santos',
    role: 'Gestora Cultural & Articuladora',
    bio: 'Especialista em políticas públicas para juventude, mediação de conflitos e gestão de iniciativas artísticas territoriais.',
    image: deboraImg,
    socialLinks: {
      email: 'institutopegavisao@gmail.com'
    }
  },
  {
    id: 'milhem-cortaz',
    name: 'Milhem Cortaz',
    role: 'Embaixador & Conselheiro Cultural',
    bio: 'Ator e entusiasta da transformação através da arte. Apoia ativamente os projetos teatrais e a formação dos jovens da Trupe Pega a Visão.',
    image: milhemImg,
    socialLinks: {
      instagram: 'https://www.instagram.com/cortaz',
      email: 'institutopegavisao@gmail.com'
    }
  }
];
