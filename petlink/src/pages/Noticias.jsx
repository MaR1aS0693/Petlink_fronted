import { useState } from 'react'
import { Btn, Chip, Card, Photo } from '../components/UI.jsx'
import { noticias } from '../data.js'
export default function Noticias() {
  const [cat, setCat] = useState('Todos')
  const [q, setQ] = useState('')
  const lista = noticias.filter(n => (cat === 'Todos' || n.cat === cat) && n.titulo.toLowerCase().includes(q.toLowerCase()))
  const [dest, ...resto] = lista
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-extrabold text-ink">Consejos para una vida más feliz y saludable</h1>
      <p className="text-slate-600">Artículos, tips y novedades para el cuidado de tu mascota.</p>
      <div className="flex flex-col gap-3 md:flex-row">
        <input className="flex-1 rounded-full border-2 border-mint bg-white px-4 py-2" placeholder="🔍 Buscar artículos" value={q} onChange={e => setQ(e.target.value)} />
        <div className="flex flex-wrap gap-2">{['Todos', 'Salud', 'Alimentación', 'Higiene', 'Bienestar'].map(c => <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm font-bold ${cat === c ? 'bg-teal text-white' : 'bg-white'}`}>{c}</button>)}</div>
      </div>
      {dest && <Card className="flex flex-col gap-4 md:flex-row"><Photo className="h-44 md:w-80" />
        <div className="space-y-2"><p><Chip className="!text-sm">{dest.cat}</Chip> <span className="text-slate-500">Destacado · {dest.fecha}</span></p>
          <h2 className="text-xl font-bold">{dest.titulo}</h2><p className="text-slate-500">{dest.resumen}</p><Btn>Leer más</Btn></div></Card>}
      <div className="grid gap-4 md:grid-cols-3">{resto.map(n => (
        <Card key={n.id} className="space-y-2"><Photo className="h-32" /><p><Chip className="!text-sm">{n.cat}</Chip> <span className="text-sm text-slate-500">{n.fecha}</span></p>
          <b>{n.titulo}</b><p className="text-sm text-slate-500">{n.resumen}</p><a className="text-sm font-bold text-teal" href="#">Leer más →</a></Card>))}</div>
    </div>
  )
}
