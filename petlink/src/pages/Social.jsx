import { useState } from 'react'
import { Btn, Chip, Card, Photo, useToast } from '../components/UI.jsx'
import { mascotas } from '../data.js'
function Interes({ nombre }) {
  const [ok, setOk] = useState(false)
  const toast = useToast()
  return <Btn variant={ok ? 'soft' : 'solid'} className="flex-1 !px-2 !py-2" onClick={() => { setOk(!ok); if (!ok) toast(`Avisamos al dueño de ${nombre} 💞`) }}>{ok ? 'Enviado ✓' : 'Me interesa'}</Btn>
}
export default function Social() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-extrabold text-ink">Encuentra un compañero para tu peludito</h1>
      <p className="text-slate-600">Dale una segunda oportunidad a un amigo y haz una gran amistad.</p>
      <div className="flex flex-wrap gap-2">{['Raza ▾', 'Tamaño ▾', 'Edad ▾', 'Distancia ▾', '🐾 Compañero de juegos', '💞 Reproducción responsable'].map(t => <Chip key={t} className="!bg-white !py-2 !text-sm">{t}</Chip>)}</div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{mascotas.map(m => (
        <Card key={m.nombre} className="space-y-2"><Photo label="Foto mascota" className="h-44" />
          <div className="flex items-center justify-between"><b className="text-lg">{m.nombre}</b>{m.celo && <span className="rounded-full bg-coral px-3 py-1 text-xs font-bold text-white">En celo</span>}</div>
          <p className="text-sm text-slate-500">{m.info}</p><p className="text-sm">📍 Huejutla (zona {m.zona})</p>
          <div className="flex flex-wrap gap-1">{m.tags.map(t => <Chip key={t}>{t}</Chip>)}</div>
          <div className="flex gap-2"><Btn variant="soft" className="flex-1 !px-2 !py-2">Ver perfil</Btn><Interes nombre={m.nombre} /></div></Card>))}</div>
      <p className="rounded-xl bg-mint p-3 font-bold text-ink">🛡️ Bienestar animal: encuentros supervisados por sus responsables. No se publican domicilios exactos ni datos personales.</p>
    </div>
  )
}
