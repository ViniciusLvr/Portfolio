export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>
        © {year} Seu Nome. Criado com React + Vite. Inspirado em EVA‑01 (roxo + verde).
      </p>
    </footer>
  )
}
