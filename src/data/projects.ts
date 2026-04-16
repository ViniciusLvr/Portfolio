export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  comingSoon?: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfólio Pessoal",
    description:
      "Este site! Um portfólio em React com cores inspirado no EVA‑01 (roxo + verde).",
    technologies: ["React", "Vite", "TypeScript", "CSS"],
    codeUrl: "https://github.com/ViniciusLvr/Portfolio",
    comingSoon: false,
  },
  {
    id: "svce",
    title: "Sistema de Vendas e Controle de Estoque",
    description:
      "Este foi meu projeto de conclusão do curso Técnico em Informática, um sistema de controle de estoque e simulação de vendas feito em PHP e pondo em prática vários conceitos aprendidos em sala de aula, como: Banco de Dados Relacional e Servidores Locais em Linux (ubuntu server).",
    technologies: ["PHP", "MySQL", "Linux"],
    codeUrl: "https://github.com/ViniciusLvr/SVCE",
    comingSoon: false,
  },
  {
    id: "blog",
    title: "Blog de games",
    description:
      "Um blog simples onde quero postar opiniões e comentar sobre jogos que ando jogando, filmes, animes e talvez algumas series. Coisa bem intima e pessoal que quero criar na marra ao inves de usar alguma outra plataforma focada no mesmo objetivo.",
    technologies: ["React"],
    comingSoon: true,
  },
];
