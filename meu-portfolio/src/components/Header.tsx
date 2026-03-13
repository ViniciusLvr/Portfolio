import profile from '../assets/profile.svg'

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/seu-usuario',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/seu-perfil',
  },
]

export default function Header() {
  return (
    <header className="header" id="inicio">
      <div className="header__inner">
        <div className="header__profile">
          <img src={profile} alt="Foto de perfil" className="header__avatar" />
        </div>

        <div className="header__content">
          <h1 className="header__title">Seu Nome</h1>
          <p className="header__subtitle">
            Desenvolvedor(a) full-stack em formação, criando interfaces criativas com
            um estilo retrofuturista.
          </p>

          <div className="header__buttons">
            <a
              className="button button--primary"
              href="mailto:seu@email.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
            <a
              className="button button--secondary"
              href="https://wa.me/5591999999999"
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
  )
}
