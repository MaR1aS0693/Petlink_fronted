import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Btn, Chip, Card, Photo, Stars, useToast } from '../components/UI.jsx'
import { productos, servicios } from '../data.js'
const cats = ['Todos', 'Alimento', 'Higiene', 'Accesorios', 'Juguetes', 'Medicina']
export default function Catalogo() {
  const [tab, setTab] = useState('Productos')
  const [cat, setCat] = useState('Todos')
  const [q, setQ] = useState('')
  const [carrito, setCarrito] = useState([])
  const toast = useToast()
  const lista = productos.filter(p => (cat === 'Todos' || p.cat === cat) && p.nombre.toLowerCase().includes(q.toLowerCase()))
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex-1"><h1 className="text-3xl font-extrabold text-ink">Productos y servicios</h1><p className="text-slate-600">Todo lo que tu mascota necesita, en un solo lugar.</p></div>
        <input className="rounded-full border-2 border-mint bg-white px-4 py-2" placeholder="🔍 Buscar" value={q} onChange={e => setQ(e.target.value)} />
        <Btn key={carrito.length} variant="coral" className="pop">🛒 Carrito ({carrito.length})</Btn>
      </div>
      <div className="grid grid-cols-2 gap-3">{['Productos', 'Servicios'].map(t => <button key={t} onClick={() => setTab(t)} className={`rounded-full py-2 font-bold ${tab === t ? 'bg-teal text-white' : 'bg-mint text-ink'}`}>{t}</button>)}</div>
      {tab === 'Productos' && <>
        <div className="flex flex-wrap gap-2">{cats.map(c => <Chip key={c} active={cat === c} onClick={() => setCat(c)} className="!bg-white !py-2 !text-sm data-[x]:bg-teal">{c}</Chip>)}</div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{lista.map(p => (
          <Card key={p.id} className="space-y-1"><Photo label="Foto producto" className="h-32" /><b className="block text-sm">{p.nombre}</b><p className="text-xs text-slate-500">{p.desc}</p>
            <p className="text-2xl font-extrabold text-ink">${p.precio.toLocaleString()} <span className="text-base font-bold text-gold">★ {p.rating}</span></p>
            <Btn className="w-full !py-2 !text-xs" onClick={() => { setCarrito([...carrito, p]); toast(`${p.nombre} agregado al carrito 🛒`) }}>Agregar al carrito</Btn></Card>))}</div></>}
      <div className="flex items-baseline gap-4"><h2 className="text-xl font-extrabold text-ink">Servicios más solicitados</h2><a className="font-bold text-teal" onClick={() => setTab('Servicios')}>Ver todos →</a></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{servicios.map(s => (
        <Card key={s.nombre} className="space-y-1"><b>{s.icon} {s.nombre}</b><p className="text-sm text-slate-500">Desde ${s.precio} · orientativo</p><Btn as={Link} to="/cita" className="w-full !py-2 !text-xs">Agendar</Btn></Card>))}</div>
    </div>
  )
}
