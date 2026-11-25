import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Btn, Chip, Card, Photo, Stars, Heart } from '../components/UI.jsx'
import { vets } from '../data.js'
export default function Buscar() {
  const [q, setQ] = useState('')
  const [urg, setUrg] = useState(false)
  const [orden, setOrden] = useState('rating')
  const lista = useMemo(() => vets
    .filter(v => (v.nombre + v.tags.join(' ')).toLowerCase().includes(q.toLowerCase()))
    .filter(v => !urg || v.horario === '24 horas')
    .sort((a, b) => orden === 'rating' ? b.rating - a.rating : parseFloat(a.dist) - parseFloat(b.dist)), [q, urg, orden])
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-extrabold text-ink">Encuentra tu veterinaria ideal</h1>
      <p className="text-sm text-slate-600">Busca por ubicación, especialidad o nombre de la clínica.</p>
      <div className="flex flex-col gap-3 md:flex-row">
        <input className="rounded-full border-2 border-mint bg-white px-4 py-2 md:w-72" defaultValue="Huejutla de Reyes, Hgo." />
        <input className="flex-1 rounded-full border-2 border-mint bg-white px-4 py-2" placeholder="🔍 Buscar clínica, especialidad o nombre" value={q} onChange={e => setQ(e.target.value)} />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Chip active={urg} onClick={() => setUrg(!urg)} className="!py-2 !bg-white data-[a=true]:!bg-teal">Urgencias 24 h</Chip>
        <select value={orden} onChange={e => setOrden(e.target.value)} className="rounded-full bg-white px-3 py-2 text-xs font-bold">
          <option value="rating">Ordenar: mejor calificación</option><option value="dist">Ordenar: más cercana</option></select>
      </div>
      {lista.map(v => (
        <Card key={v.id} className="flex flex-col gap-4 md:flex-row md:items-center">
          <Photo className="h-32 md:w-56" />
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-3"><h3 className="text-xl font-bold">{v.nombre}</h3><span className="rounded-full bg-mint px-3 py-1 text-sm font-bold text-ink">Abierto</span><Heart /></div>
            <Stars n={v.rating} count={v.reseñas} />
            <p className="text-xs text-slate-500">📍 {v.dir}</p><p className="text-xs text-slate-500">🕘 {v.horario}</p>
            <div className="flex flex-wrap gap-1">{v.tags.map(t => <Chip key={t}>{t}</Chip>)}</div>
          </div>
          <Btn as={Link} to="/perfil">Ver perfil</Btn>
        </Card>
      ))}
      {!lista.length && <p className="py-10 text-center text-slate-500">No encontramos clínicas con esos filtros. Prueba con otra búsqueda.</p>}
    </div>
  )
}
