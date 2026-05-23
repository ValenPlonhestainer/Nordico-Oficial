import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Instalacion from './pages/Instalacion'
import Presupuesto from './pages/Presupuesto'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/instalacion" element={<Instalacion />} />
        <Route path="/presupuesto" element={<Presupuesto />} />
      </Routes>
    </>
  )
}
