import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Btn, Chip, Card, Photo, Heart, VetCard, useToast } from '../components/UI.jsx'
import { vets, servicios, productos, mascotas, noticias } from '../data.js'

const Titulo = ({ children, to, link = 'Ver todas →' }) => (
  <div className="flex items-baseline gap-4">
    <h2 className="text-2xl font-extrabold text-ink">{children}</h2>
    {to && <Link to={to} className="font-bold text-teal">{link}</Link>}
  </div>
)

// Misma estructura que VetCard: foto, título + corazón, datos, chips y botón
const NoticiaCard = ({ n }) => (
  <Card className="flex flex-col gap-2">
    <Photo className="h-28" />
    <div className="flex items-center justify-between"><h3 className="text-lg font-bold leading-tight">{n.titulo}</h3><Heart /></div>
    <p className="text-xs text-slate-500">🗓️ {n.fecha} · 📰 Noticias del día</p>
    <p className="text-sm text-slate-600">{n.resumen}</p>
    <div className="flex flex-wrap gap-1"><Chip>{n.cat}</Chip></div>
    <Btn as={Link} to="/noticias" className="mt-auto">Leer más</Btn>
  </Card>
)

const PetCard = ({ m }) => {
  const [ok, setOk] = useState(false)
  const toast = useToast()
  return (
    <Card className="flex flex-col gap-2">
      <Photo label="Foto mascota" className="h-28" />
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-bold">{m.nombre}{m.celo && <span className="rounded-full bg-coral px-2 py-0.5 text-xs font-bold text-white">En celo</span>}</h3>
        <Heart />
      </div>
      <p className="text-xs text-slate-500">{m.info}</p>
      <p className="text-xs text-slate-500">📍 Huejutla · zona {m.zona}</p>
      <div className="flex flex-wrap gap-1">{m.tags.map(t => <Chip key={t}>{t}</Chip>)}</div>
      <Btn variant={ok ? 'soft' : 'solid'} onClick={() => { setOk(!ok); if (!ok) toast(`Avisamos al dueño de ${m.nombre} 💞`) }}>{ok ? 'Enviado ✓' : 'Me interesa'}</Btn>
    </Card>
  )
}

export default function Inicio() {
  const nav = useNavigate()
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-mint p-6 md:p-8">
        <h1 className="text-3xl font-extrabold text-ink md:text-4xl">Todo el cuidado de tu mascota en un solo lugar</h1>
        <p className="mt-2 text-slate-600">Clínicas, servicios, productos y más. Porque ellos también son familia.</p>
        <form onSubmit={e => { e.preventDefault(); nav('/buscar') }} className="mt-4 flex flex-col gap-3 md:flex-row">
          <input className="rounded-full bg-white px-4 py-3 md:w-64" placeholder="📍 Ciudad" />
          <input className="rounded-full bg-white px-4 py-3 md:w-72" placeholder="🔍 Clínica o especialidad" />
          <Btn type="submit">Encontrar veterinaria</Btn>
        </form>
      </section>

      <section className="space-y-4">
        <Titulo to="/buscar">Veterinarias recomendadas</Titulo>
        <div className="grid gap-4 md:grid-cols-3">{vets.map(v => <VetCard key={v.id} v={v} />)}</div>
      </section>

      <section className="space-y-4">
        <Titulo to="/noticias">Noticias del día</Titulo>
        <div className="grid gap-4 md:grid-cols-3">{noticias.slice(0, 3).map(n => <NoticiaCard key={n.id} n={n} />)}</div>
      </section>

      <section className="space-y-4">
        <Titulo to="/social">Pet Social: buscan compañero 💞</Titulo>
        <div className="grid gap-4 md:grid-cols-3">{mascotas.slice(0, 3).map(m => <PetCard key={m.nombre} m={m} />)}</div>
      </section>

      <section className="space-y-4">
        <Titulo to="/catalogo">Servicios más solicitados</Titulo>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map(s => (
            <Card key={s.nombre} className="space-y-1"><p className="text-3xl">{s.icon}</p><b className="block text-lg">{s.nombre}</b>
              <p className="text-sm text-slate-500">Desde ${s.precio} · orientativo</p>
              <Btn as={Link} to="/cita" variant="soft" className="mt-2 w-full !py-2 !text-xs">Agendar</Btn></Card>))}
        </div>
      </section>

      <section className="space-y-4">
        <Titulo to="/catalogo">Productos destacados</Titulo>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productos.map(p => (
            <Card key={p.id} className="space-y-1"><Photo label="Foto producto" className="h-28" />
              <b className="block text-sm">{p.nombre}</b><p className="text-xs text-slate-500">{p.desc}</p>
              <p className="text-xl font-extrabold text-ink">${p.precio.toLocaleString()} <span className="text-sm text-gold">★ {p.rating}</span></p>
              <Btn as={Link} to="/catalogo" className="w-full !py-2 !text-xs">Ver producto</Btn></Card>))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-center text-2xl font-extrabold text-ink">¿Cómo funciona PetLink?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[['🔍', '1. Encuentra', 'Busca la clínica o especialista ideal cerca de ti.'], ['📅', '2. Agenda', 'Elige fecha y hora en menos de un minuto.'], ['💙', '3. Cuida', 'Lleva el historial y las vacunas de tu mascota en un solo lugar.']].map(([i, t, d]) => (
            <Card key={t} className="text-center"><p className="text-4xl">{i}</p><b className="block text-lg text-ink">{t}</b><p className="text-sm text-slate-600">{d}</p></Card>))}
        </div>
      </section>

      <section className="rounded-3xl bg-teal p-8 text-center text-white">
        <h2 className="text-2xl font-extrabold md:text-3xl">¿Listo para cuidar mejor a tu mascota?</h2>
        <p className="mt-2">Crea tu cuenta y agenda tu primera cita hoy mismo.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Btn as={Link} to="/cita" variant="coral">Agendar cita</Btn>
          <Btn as={Link} to="/buscar" variant="outline">Ver veterinarias</Btn>
        </div>
      </section>
    </div>
  )
}