import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import PillNav from './components/PillNav'
import ScrollTopButton from './components/ScrollTopButton'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Instalacion from './pages/Instalacion'
import Presupuesto from './pages/Presupuesto'

const NAV_ITEMS = [
  { label: 'Inicio',      href: '/' },
  { label: 'Productos',   href: '/productos' },
  { label: 'Instalación', href: '/instalacion' },
  { label: 'Presupuesto', href: '/presupuesto' },
]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()

  return (
    <>
      <PillNav
        logo="/img/logo nordico.png"
        logoAlt="Nordico"
        items={NAV_ITEMS}
        activeHref={pathname}
        baseColor="#E8521A"
        pillColor="#141414"
        pillTextColor="#F5F4F0"
        hoveredPillTextColor="#F5F4F0"
        initialLoadAnimation={true}
      />
      <ScrollToTop />
      <ScrollTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/instalacion" element={<Instalacion />} />
        <Route path="/presupuesto" element={<Presupuesto />} />
      </Routes>
    </>
  )
}
