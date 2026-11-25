import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Btn, Chip, Card, Photo, Heart } from '../components/UI.jsx'
const reseñas = [{ n: 'Carla Méndez', f: '12 oct 2026', t: 'Excelente atención, muy profesional y amable con mi mascota.' }, { n: 'Luis Ortega', f: '5 oct 2026', t: 'Explicó todo el tratamiento con paciencia. Muy recomendada.' }]
export default function Perfil() {
  const [tab, setTab] = useState('Sobre mí')
  return (
    <div className="space-y-4">
      <Link to="/buscar" className="font-bold text-teal">← Volver a veterinarias</Link>
      <div className="grid gap-4 md:grid-cols-[320px_1fr]">
        <Card className="space-y-2"><Photo className="h-56" />
          <div className="flex items-center gap-2"><h1 className="text-2xl font-bold">Dra. Ana López</h1><Heart /></div>
          <p className="font-bold text-teal">Médico Veterinario Zootecnista</p>
          <p><span className="text-gold">★★★★★</span> <b>4.9</b> (87 reseñas)</p>
          <p>🏥 Clínica: VetPet Huejutla</p><p>🎓 8 años de experiencia</p><p>🕘 Lun–Sáb · 9:00–19:00</p>
          <Btn as={Link} to="/cita" variant="coral" className="w-full">Agendar cita</Btn></Card>
        <div className="space-y-4">
          <div className="flex gap-2">{['Sobre mí', 'Reseñas (87)', 'Horarios'].map(t => <Chip key={t} active={tab === t} onClick={() => setTab(t)} className="!px-4 !py-2 !text-sm">{t}</Chip>)}</div>
          <Card>
            {tab === 'Sobre mí' && <><p>Con 8 años de experiencia en el cuidado de perros y gatos, mi enfoque es brindar una atención cercana, profesional y con mucho cariño a cada paciente.</p>
              <div className="mt-3 flex gap-2">{['Medicina general', 'Cirugía', 'Dermatología'].map(t => <Chip key={t} className="!text-sm">{t}</Chip>)}</div></>}
            {tab.startsWith('Reseñas') && reseñas.map(r => <p key={r.n} className="py-1"><b>{r.n}</b> · {r.f}<br />{r.t}</p>)}
            {tab === 'Horarios' && <p>Lunes a sábado de 9:00 a 19:00.</p>}
          </Card>
          <div className="grid gap-4 md:grid-cols-[200px_1fr]">
            <Card className="text-center"><p className="text-5xl font-extrabold text-ink">4.9</p><p className="text-sm font-bold text-gold">★★★★★ · 87 reseñas</p></Card>
            <Card><p className="font-bold">Atención 98% · Puntualidad 95% · Trato 99%</p><p className="text-sm text-slate-500">Basado en opiniones de propietarios verificados.</p></Card>
          </div>
          <h2 className="text-xl font-extrabold text-ink">Reseñas recientes</h2>
          <div className="grid gap-4 md:grid-cols-2">{reseñas.map(r => <Card key={r.n}><p className="font-bold">{r.n} · <span className="text-gold">★★★★★</span></p><p className="text-sm text-slate-500">{r.f}</p><p className="mt-2 text-sm">{r.t}</p></Card>)}</div>
        </div>
      </div>
    </div>
  )
}
