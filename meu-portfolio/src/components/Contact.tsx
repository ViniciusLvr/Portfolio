export default function Contact() {
  return (
    <section className="section section--accent" id="contato">
      <div className="section__inner">
        <div className="section__header">
          <h2>Contato</h2>
          <p>
            Quer conversar sobre um projeto ou compartilhar ideias? Me manda uma
            mensagem por email ou WhatsApp.
          </p>
        </div>

        <div className="contact-grid">
          <a
            href="mailto:seu@email.com"
            className="contact-card"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Email</h3>
            <p>seu@email.com</p>
          </a>

          <a
            href="https://wa.me/5591999999999"
            className="contact-card"
            target="_blank"
            rel="noreferrer"
          >
            <h3>WhatsApp</h3>
            <p>+55 91 99999-9999</p>
          </a>
        </div>
      </div>
    </section>
  )
}
