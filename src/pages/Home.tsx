import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { StaggerTestimonials } from '../components/ui/stagger-testimonials'

function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3) }

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsTriggered, setStatsTriggered] = useState(false)
  const [statValues, setStatValues] = useState([0, 0, 0, 0])

  // Stats counter animation
  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setStatsTriggered(true)
        observer.disconnect()
      }
    }, { threshold: 0.4 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!statsTriggered) return
    const targets = [8, 6, 100, 6]
    const duration = 1800
    let startTime: number | null = null

    function step(now: number) {
      if (!startTime) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = easeOutCubic(progress)
      setStatValues(targets.map(t => Math.round(eased * t)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [statsTriggered])

  return (
    <div id="home">

      {/* ── Hero ── */}
      <div className="home-hero">
        <div className="home-hero-bg" />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <div className="home-hero-tag fade-up">// Losetas Atérmicas</div>
          <h1 className="home-hero-title fade-up-2">
            Tu Pileta<br />Nunca Tan<br /><span>Fresca.</span>
          </h1>
          <p className="home-hero-body fade-up-3">
            Losetas atérmicas de alta calidad. Superficies más frescas,
            diseño premium y durabilidad extrema para proyectos que exigen lo mejor.
          </p>
          <div className="home-hero-actions fade-up-4">
            <Link className="btn-primary" to="/productos">VER CATÁLOGO</Link>
            <Link className="btn-outline" to="/presupuesto">PEDIR PRESUPUESTO</Link>
          </div>
        </div>
        <div className="home-hero-badges">
          <div className="home-hero-badge-item">Materia Prima de Primera Calidad</div>
          <div className="home-hero-badge-item">Soluciones Térmicas</div>
        </div>
        <div className="home-hero-scroll">Explorar</div>
      </div>

      {/* ── Stats ── */}
      <div className="home-stats" ref={statsRef}>
        <div className="stat-item">
          <div className="stat-number">{statValues[0]}<em>°C</em></div>
          <div className="stat-label">Más fresca que el asfalto</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{statValues[1]}<em>+</em></div>
          <div className="stat-label">Modelos disponibles</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{statValues[2]}<em>+</em></div>
          <div className="stat-label">Proyectos instalados</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{statValues[3]}<em> AÑOS</em></div>
          <div className="stat-label">Garantía de durabilidad</div>
        </div>
      </div>

      {/* ── Features ── */}
      <div className="home-features">
        <div className="section-eyebrow">// Por qué Nordico</div>
        <div className="section-title">Tecnología<br />que se siente.</div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">❄</div>
            <div className="feature-title">Tecnología Térmica</div>
            <div className="feature-body">Material atérmico de última generación. Superficies que permanecen frescas incluso bajo el sol más intenso del verano.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">◈</div>
            <div className="feature-title">Diseño Premium</div>
            <div className="feature-body">Estética moderna y versátil. Cada modelo está pensado para complementar arquitecturas de alta gama y proyectos exigentes.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⬡</div>
            <div className="feature-title">Alta Durabilidad</div>
            <div className="feature-body">Resistentes a rayos UV, humedad y climas extremos. Construidas para durar años sin perder rendimiento ni color.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✦</div>
            <div className="feature-title">Instalación Simple</div>
            <div className="feature-body">Sistema de colocación pensado para agilizar la obra. Guía técnica detallada incluida con cada pedido.</div>
          </div>
        </div>
      </div>

      {/* ── Productos destacados ── */}
      <div className="home-products">
        <div className="home-products-header">
          <div>
            <div className="section-eyebrow">// Nuestros Modelos</div>
            <div className="section-title" style={{ fontSize: 'clamp(30px,3.5vw,48px)', marginBottom: 0 }}>
              NUESTRA <span style={{ color: 'var(--orange)' }}>COLECCION</span>
            </div>
          </div>
          <Link className="btn-outline" to="/productos">Ver catálogo completo</Link>
        </div>

        <div className="home-products-showcase">
          <Link className="showcase-featured" to="/productos">
            <img
              src="/img/Solarium Cartoon.png"
              alt="Solarium"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
            />
            <div className="showcase-featured-overlay">
              <div className="showcase-tag">MÁS POPULAR</div>
              <div className="showcase-name">LOSETAS ATERMICAS</div>
              <div className="showcase-cta">Ver colección</div>
            </div>
          </Link>
          <Link className="showcase-featured" to="/productos">
            <img
              src="/img/Baldosa Cartoon.png"
              alt="Baldosa"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
            />
            <div className="showcase-featured-overlay">
              <div className="showcase-name">BALDOSAS</div>
              <div className="showcase-cta">Ver colección</div>
            </div>
          </Link>
          <Link className="showcase-featured" to="/productos">
            <img
              src="/img/Revestimiento Cartoon.png"
              alt="Revestimiento"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
            />
            <div className="showcase-featured-overlay">
              <div className="showcase-name">REVESTIMIENTOS</div>
              <div className="showcase-cta">Ver colección</div>
            </div>
          </Link>
        </div>

      </div>

      {/* ── Reviews ── */}
      <div className="home-reviews">
        <div className="home-reviews-header">
          <div className="section-eyebrow">// Lo que dicen nuestros clientes</div>
          <div className="section-title" style={{ fontSize: 'clamp(30px,3.5vw,48px)', marginBottom: 0 }}>
            Opiniones en <span style={{ color: 'var(--orange)' }}>Google</span>
          </div>
        </div>
        <StaggerTestimonials />
      </div>

      {/* ── CTA ── */}
      <div className="home-cta">
        <div className="home-cta-bg" />
        <div className="home-cta-content">
          <div className="home-cta-title">
            ¿Listo para<br />Transformar<br />tu <span>Pileta?</span>
          </div>
          <div className="home-cta-sub">
            Pedí tu presupuesto sin compromiso. Te asesoramos en la elección
            del modelo ideal para tu proyecto.
          </div>
        </div>
        <div className="home-cta-actions">
          <Link className="btn-primary" to="/presupuesto">SOLICITAR PRESUPUESTO</Link>
          <Link className="btn-outline" to="/instalacion">VER GUÍA DE INSTALACIÓN</Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
