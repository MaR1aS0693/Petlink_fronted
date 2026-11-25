import { Link } from 'react-router-dom'
import { Btn, Card, Photo } from '../components/UI.jsx'
const menu = ['👤 Mi perfil', '🐾 Mis mascotas', '📅 Mis citas', '📋 Historial clínico', '💉 Vacunas', '📦 Pedidos', '🔔 Notificaciones']
const pets = [
  { n: 'Luna', t: 'Perro · French Bulldog', i: '3 años · Hembra · 12 kg', s: 'Vacunación al día', ok: true },
  { n: 'Milo', t: 'Gato · Doméstico', i: '1 año · Macho · 5 kg', s: 'Vacuna pendiente', ok: false },
]
export default function Cuenta() {
  return (
    <div className="grid gap-4 md:grid-cols-[260px_1fr]">
      <Card className="space-y-2">
        <div className="flex items-center gap-3"><Photo label="" className="h-14 w-14 !rounded-full" /><div><b>María Fernanda</b><p className="text-sm text-slate-500">maria@email.com</p></div></div>
        {menu.map((m, i) => <a key={m} href="#" className={`block rounded-xl px-2 py-1.5 font-bold ${i === 1 ? 'bg-mint text-teal' : ''}`}>{m}</a>)}
        <Link to="/login" className="block px-2 py-1.5 font-bold">↩ Cerrar sesión</Link></Card>
      <div className="space-y-4">
        <div className="flex items-center gap-4"><h1 className="text-3xl font-extrabold text-ink">Mis mascotas</h1><Btn className="!py-2">+ Agregar mascota</Btn></div>
        <div className="grid gap-4 lg:grid-cols-2">{pets.map(p => (
          <Card key={p.n} className="space-y-2"><div className="flex gap-4"><Photo className="h-24 w-24 shrink-0" />
            <div><h2 className="text-xl font-bold">{p.n}</h2><p className="text-sm text-slate-500">{p.t}</p><p className="text-sm text-slate-500">{p.i}</p></div></div>
            <p className={`rounded-full px-3 py-1 text-sm font-bold ${p.ok ? 'bg-mint text-ink' : 'bg-coral text-white'}`}>{p.s}</p>
            <div className="flex gap-2"><Btn variant="soft" className="flex-1">Ver perfil</Btn><Btn className="flex-1">Historial clínico</Btn></div></Card>))}</div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card><h3 className="font-bold text-ink">📅 Próximas citas</h3><p className="font-bold">21 oct 2026 · 10:00 — Consulta general</p><p className="text-sm text-slate-500">VetPet Huejutla · Dra. Ana López</p></Card>
          <Card><h3 className="font-bold text-ink">🔔 Recordatorios</h3><p className="font-bold">Refuerzo de Milo: 30 oct 2026</p><p className="text-sm text-slate-500">Desparasitación de Luna: 5 nov</p></Card>
          <Card className="space-y-2"><h3 className="font-bold text-ink">📋 Historial clínico</h3><p className="text-sm text-slate-500">Acceso autorizado a clínicas</p><Btn className="w-full">Ver historial</Btn></Card>
        </div>
      </div>
    </div>
  )
}
