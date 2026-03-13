export type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  codeUrl?: string
  comingSoon?: boolean
  image?: string
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfólio Pessoal',
    description:
      'Este site! Um portfólio em React com estilo retrofuturista inspirado em EVA‑01 (roxo + verde).',
    technologies: ['React', 'Vite', 'TypeScript', 'CSS'],
    codeUrl: 'https://github.com/seu-usuario/meu-portfolio',
    comingSoon: false,
  },
  {
    id: 'todo',
    title: 'App de Tarefas',
    description:
      'Um aplicativo simples de lista de tarefas com persistência local e filtros.',
    technologies: ['React', 'TypeScript', 'Local Storage'],
    comingSoon: true,
  },
  {
    id: 'blog',
    title: 'Blog Retro',
    description:
      'Um blog estilizado com tema retrô e navegação entre posts.',
    technologies: ['React', 'Markdown', 'CSS Animations'],
    comingSoon: true,
  },
]
