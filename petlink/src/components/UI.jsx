import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import logoPetLink from '../assets/logo_Universa.png'
import { useState, useEffect, createContext, useContext, useCallback } from 'react'

const ToastCtx = createContext(() => {})
export const useToast = () => useContext(ToastCtx)

export const Photo = ({ label = 'Foto', className = 'h-24' }) => (
  <div className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-teal/50 bg-mint text-ink font-bold ${className}`}>
    <span className="text-2xl">📷</span>{label}
  </div>
)
export const Chip = ({ children, active, onClick, className = '' }) => (
  <button type="button" onClick={onClick} className={`rounded-full px-3 py-1 text-xs font-bold transition active:scale-95 ${active ? 'bg-teal text-white' : 'bg-mint text-ink'} ${className}`}>{children}</button>
)
export const Btn = ({ variant = 'solid', className = '', as: As = 'button', ...p }) => {
  const v = { solid: 'bg-teal text-white hover:bg-ink', outline: 'border-2 border-teal text-ink bg-white hover:bg-mint', coral: 'bg-coral text-white hover:opacity-90', soft: 'bg-mint text-ink hover:bg-teal hover:text-white' }[variant]
  return <As className={`inline-block rounded-full px-5 py-2.5 text-center text-sm font-bold transition duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-95 ${v} ${className}`} {...p} />
}
export const Stars = ({ n, count }) => (
  <span className="text-xs"><span className="text-gold">★★★★★</span> <b>{n}</b>{count != null && <span className="font-semibold"> ({count} reseñas)</span>}</span>
)
export const Card = ({ className = '', ...p }) => <div className={`rounded-3xl bg-white p-4 shadow-sm ${className}`} {...p} />
export const Heart = () => {
  const [on, setOn] = useState(false)
  const toast = useToast()
  const click = () => { setOn(!on); toast(on ? 'Quitado de favoritos' : 'Guardado en favoritos ❤️') }
  return <button key={String(on)} onClick={click} aria-label="Favorito" className={`text-xl text-coral ${on ? 'pop' : ''}`}>{on ? '♥' : '♡'}</button>
}
export const VetCard = ({ v }) => (
  <Card className="flex flex-col gap-2">
    <Photo className="h-28" />
    <div className="flex items-center justify-between"><h3 className="text-lg font-bold">{v.nombre}</h3><Heart /></div>
    <Stars n={v.rating} count={v.reseñas} />
    <p className="text-xs text-slate-500">📍 Huejutla · {v.dist}</p>
    <div className="flex flex-wrap gap-1">{v.tags.slice(0, 2).map(t => <Chip key={t}>{t}</Chip>)}</div>
    <Btn as={Link} to="/perfil">Ver detalles</Btn>
  </Card>
)

const links = [['/inicio', 'Inicio'], ['/buscar', 'Veterinarias'], ['/catalogo', 'Servicios'], ['/catalogo', 'Productos'], ['/noticias', 'Noticias'], ['/social', 'Pet Social'], ['/cuenta', 'Mis mascotas']]
export function Footer() {
  const col = 'space-y-2 text-sm'
  const a = 'block text-slate-600 hover:text-teal'
  return (
    <footer className="mt-10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <img src={logoPetLink} alt="PetLink" className="h-16 w-auto" />
          <p className="text-sm text-slate-600">Todo el cuidado de tu mascota en un solo lugar. Porque ellos también son familia.</p>
          <div className="flex gap-3 text-xl"><a href="#" aria-label="Facebook">📘</a><a href="#" aria-label="Instagram">📸</a><a href="#" aria-label="WhatsApp">💬</a></div>
        </div>
        <div className={col}><h4 className="font-extrabold text-ink">Explorar</h4>
          <Link className={a} to="/buscar">Veterinarias</Link><Link className={a} to="/catalogo">Servicios</Link><Link className={a} to="/catalogo">Productos</Link><Link className={a} to="/noticias">Noticias</Link><Link className={a} to="/social">Pet Social</Link></div>
        <div className={col}><h4 className="font-extrabold text-ink">Mi cuenta</h4>
          <Link className={a} to="/cuenta">Mis mascotas</Link><Link className={a} to="/cita">Agendar cita</Link><Link className={a} to="/cuenta">Historial clínico</Link><Link className={a} to="/login">Iniciar sesión</Link></div>
        <div className={col}><h4 className="font-extrabold text-ink">Contacto</h4>
          <p className="text-slate-600">📍 Huejutla de Reyes, Hidalgo</p><p className="text-slate-600">📞 771 000 0000</p><p className="text-slate-600">✉️ contacto@petlink.com</p></div>
      </div>
      <div className="border-t border-mint py-4 text-center text-xs text-slate-500">
        <a href="#" className="text-teal">Términos y condiciones</a> · <a href="#" className="text-teal">Aviso de privacidad</a>
        <p className="mt-1">© {new Date().getFullYear()} PetLink Multiclínica. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export function Layout() {
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState(null)
  const { pathname } = useLocation()
  const toast = useCallback((t) => { setMsg({ t, id: Date.now() }) }, [])
  useEffect(() => { if (!msg) return; const h = setTimeout(() => setMsg(null), 2200); return () => clearTimeout(h) }, [msg])
  useEffect(() => {
    window.scrollTo(0, 0)
    const els = [...document.querySelectorAll('main > div > *:not(.grid), main .grid > *')]
    const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.08 })
    const timers = []
    els.forEach((el, i) => {
      el.classList.add('reveal'); el.style.transitionDelay = `${(i % 4) * 80}ms`; io.observe(el)
      timers.push(setTimeout(() => { el.classList.remove('reveal', 'in'); el.style.transitionDelay = '' }, 3500))
    })
    return () => { io.disconnect(); timers.forEach(clearTimeout) }
  }, [pathname])
  return (
    <ToastCtx.Provider value={toast}><div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <Link to="/inicio" className="shrink-0">
         <img src={logoPetLink} alt="PetLink Multiclínica" className="h-14 w-auto object-contain" />
          </Link>
          <button className="text-2xl lg:hidden" onClick={() => setOpen(!open)} aria-label="Menú">☰</button>
          <nav className={`${open ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col bg-white p-4 shadow-md lg:static lg:flex lg:w-auto lg:flex-row lg:gap-1 lg:p-0 lg:shadow-none`}>
            {links.map(([to, t]) => (
              <NavLink key={t} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-bold ${isActive && (t !== 'Servicios') ? 'bg-mint text-teal' : 'text-slate-800'}`}>{t}</NavLink>
            ))}
          </nav>
          <Btn as={Link} to="/cuenta" className="hidden whitespace-nowrap lg:inline-block">👤 Ana</Btn>
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl flex-1 p-4 md:p-6"><Outlet /></main>
      <Footer />
      {msg && <div key={msg.id} className="toast fixed bottom-6 left-1/2 z-50 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-lg">{msg.t}</div>}
    </div></ToastCtx.Provider>
  )
}
