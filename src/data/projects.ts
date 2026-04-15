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
    id: "blog",
    title: "Blog de games",
    description:
      "Um blog simples onde quero postar opniões e comentar sobre jogos que ando jogando, filmes, animes e talvez algumas series. Coisa bem intima e pessoal que quero criar na marra ao inves de usar alguma outra plataforma focada no mesmo objetivo.",
    technologies: ["React"],
    comingSoon: true,
  },
];
