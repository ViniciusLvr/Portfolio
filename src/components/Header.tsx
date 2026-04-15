import profile from "../assets/pfp.jpg";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/ViniciusLvr",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vinicius-santos-de-oliveira-566746308/",
  },
];

export default function Header() {
  return (
    <header className="header section--accent" id="inicio">
      <div className="header__inner">
        <div className="header__profile">
          <img src={profile} alt="Foto de perfil" className="header__avatar" />
        </div>

        <div className="header__content">
          <h1 className="header__title">Vinicius Santos de Oliveira</h1>
          <p className="header__subtitle">
            Desenvolvedor full-stack em formação.
          </p>

          <div className="header__buttons">
            <a
              className="button button--primary"
              href="mailto:viniciusvso72@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
            <a
              className="button button--secondary"
              href="https://wa.me/559284055907"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <div className="header__social">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="header__socialLink"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav className="nav" aria-label="Navegação principal">
        <a href="#projetos" className="nav__link">
          Projetos
        </a>
        <a href="#contato" className="nav__link">
          Contato
        </a>
      </nav>
    </header>
  );
}
