import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Btn, Card, Photo, useToast } from '../components/UI.jsx'
const horas = ['09:00', '10:00', '11:00', '12:00', '14:00', '16:00']
const dias = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
export default function Cita() {
  const hoy = new Date(2026, 9, 1) // Octubre 2026 (mes 9). Cámbialo por el mes dinámico
  const offset = (hoy.getDay() + 6) % 7
  const total = new Date(2026, 10, 0).getDate()
  const [dia, setDia] = useState(15)
  const [hora, setHora] = useState('11:00')
  const [paso, setPaso] = useState(1)
  const [ok, setOk] = useState(false)
  const toast = useToast()
  const sel = 'w-full rounded-2xl border-2 border-mint bg-white px-4 py-3'
  const fecha = new Date(2026, 9, dia).toLocaleDateString('es-MX', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
  return (
    <div className="space-y-4">
      <Link to="/perfil" className="font-bold text-teal">← Volver</Link>
      <h1 className="text-3xl font-extrabold text-ink">Agendar cita</h1>
      <div className="grid grid-cols-3 gap-3">{['1. Fecha y hora', '2. Servicio', '3. Confirmación'].map((t, i) => <button key={t} onClick={() => setPaso(i + 1)} className={`rounded-full py-2 font-bold ${paso === i + 1 ? 'bg-teal text-white' : 'bg-white'}`}>{t}</button>)}</div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="space-y-3"><h2 className="text-xl font-bold text-ink">1. Mascota y profesional</h2>
          <div className="flex items-center gap-3"><Photo label="" className="h-16 w-16 !rounded-full" /><div><b>Luna</b><p className="text-sm text-slate-500">French Bulldog · 3 años</p></div></div>
          <select className={sel}><option>🏥 VetPet Huejutla</option></select>
          <select className={sel}><option>👩‍⚕️ Dra. Ana López</option></select>
          <select className={sel}><option>🩺 Consulta general</option><option>💉 Vacunación</option></select></Card>
        <Card><h2 className="text-xl font-bold text-ink">2. Fecha — Octubre 2026</h2>
          <div className="mt-3 grid grid-cols-7 gap-2 text-center">
            {dias.map((d, i) => <b key={i} className="text-teal">{d}</b>)}
            {Array.from({ length: offset }).map((_, i) => <span key={'e' + i} />)}
            {Array.from({ length: total }, (_, i) => i + 1).map(d => (
              <button key={d} disabled={d < 12} onClick={() => setDia(d)} className={`rounded-lg py-1.5 text-sm font-bold ${d === dia ? 'bg-teal text-white' : d < 12 ? 'text-slate-300' : 'bg-mint text-ink'}`}>{d}</button>))}
          </div>
          <h3 className="mt-4 font-bold text-ink">Horarios disponibles</h3>
          <div className="mt-2 flex flex-wrap gap-2">{horas.map(h => <button key={h} onClick={() => setHora(h)} className={`rounded-full px-4 py-1.5 text-sm font-bold ${h === hora ? 'bg-teal text-white' : 'bg-mint text-ink'}`}>{h}</button>)}</div></Card>
        <Card className="space-y-2"><h2 className="text-xl font-bold text-ink">3. Resumen</h2>
          <p className="font-bold">📅 {fecha} · {hora}</p><p>Luna · Consulta general</p><p>👩‍⚕️ Dra. Ana López</p>
          <p className="font-bold text-ink">Total estimado: $350</p>
          <Btn className="w-full" onClick={() => setPaso(Math.min(3, paso + 1))}>Continuar</Btn>
          <Btn variant="coral" className="w-full" onClick={() => { setOk(true); toast('¡Cita confirmada! 🎉') /* TODO: POST /api/citas */ }}>Confirmar cita</Btn>
          {ok && <p className="rounded-xl bg-mint p-2 text-center text-sm font-bold text-ink">¡Cita confirmada para el {fecha} a las {hora}!</p>}</Card>
      </div>
    </div>
  )
}
