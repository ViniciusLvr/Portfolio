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
            href="mailto:viniciusvso72@gmail.com"
            className="contact-card"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Email</h3>
            <p>viniciusvso72@gmail.com</p>
          </a>

          <a
            href="https://wa.me/559284055907"
            className="contact-card"
            target="_blank"
            rel="noreferrer"
          >
            <h3>WhatsApp</h3>
            <p>+55 92 8405-5907</p>
          </a>
        </div>
      </div>
    </section>
  );
}
