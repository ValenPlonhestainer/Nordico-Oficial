import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="logo">NORDICO</div>
      <div className="copy">© 2026 Nordico S.A. Todos los derechos reservados.</div>
      <div className="links">
        <a href="#">Política de privacidad</a>
        <a href="#">Términos</a>
        <Link to="/presupuesto">Contacto</Link>
      </div>
    </footer>
  )
}
