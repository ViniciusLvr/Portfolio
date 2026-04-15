export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        © {year} ViniciusLvr. Criado com React + Vite. Cores inspiradas em
        EVA‑01.
      </p>
    </footer>
  );
}
