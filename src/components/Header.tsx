import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)
  const { pathname } = useLocation()
  const isPresupuesto = pathname === '/presupuesto'

  return (
    <nav>
      <NavLink className="nav-logo" to="/" onClick={close}>NORDICO</NavLink>

      <ul className={`nav-links${isOpen ? ' nav-open' : ''}`}>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/productos" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink to="/instalacion" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>
            Instalación
          </NavLink>
        </li>
        <li>
          <NavLink to="/presupuesto" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>
            Presupuesto
          </NavLink>
        </li>
        {!isPresupuesto && (
          <li className="nav-links-cta-mobile">
            <NavLink className="btn-primary" to="/presupuesto" onClick={close}>
              PEDIR PRESUPUESTO
            </NavLink>
          </li>
        )}
      </ul>

      <NavLink
        className="btn-primary nav-cta-desktop"
        to="/presupuesto"
        style={isPresupuesto ? { visibility: 'hidden', pointerEvents: 'none' } : undefined}
      >
        PEDIR PRESUPUESTO
      </NavLink>

      <button
        className={`nav-hamburger${isOpen ? ' nav-hamburger-open' : ''}`}
        onClick={() => setIsOpen(o => !o)}
        aria-label="Abrir menú"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
