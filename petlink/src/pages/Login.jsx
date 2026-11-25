import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Btn } from '../components/UI.jsx'
import logoPetLink from '../assets/logo-petlink.png'

export default function Login() {
  const nav = useNavigate()
  const [rol, setRol] = useState('propietario')
  const [show, setShow] = useState(false)
  const [f, setF] = useState({ email: '', pass: '', recordar: false })

  const submit = (e) => {
    e.preventDefault()
    /* TODO: POST /api/login con { ...f, rol } */
    nav('/inicio')
  }

  const inp =
    'w-full rounded-2xl border-2 border-mint bg-white px-4 py-2.5 outline-none focus:border-teal'

  const beneficios = [
    ['🛡️', 'Encuentra veterinarias confiables'],
    ['📅', 'Agenda tus citas fácilmente'],
    ['💙', 'Cuida la salud de tus mascotas'],
  ]

  return (
    <div className="grid min-h-screen md:grid-cols-2">
      {/* PANEL IZQUIERDO */}
      <section className="flex flex-col items-center justify-center bg-mint px-6 py-8 text-center">
        {/* Título de marca (si tu PNG ya incluye este texto, bórralo de aquí) */}
        <h1 className="text-5xl font-extrabold leading-none tracking-wide text-ink">
          PETLINK
        </h1>
        <p className="mt-1 text-xl font-bold tracking-[0.3em] text-teal">
          MULTICLÍNICA
        </p>

        {/* Logo: altura controlada y márgenes negativos para quitar el aire del PNG */}
        <img
          src={logoPetLink}
          alt="Mascota veterinaria de PetLink"
          className="-my-4 h-56 w-auto max-w-full object-contain lg:h-64"
        />

        <h2 className="text-3xl font-extrabold text-ink">¡Bienvenido a PetLink!</h2>
        <p className="mt-2 max-w-sm text-lg text-slate-600">
          Todo el cuidado de tu mascota en un solo lugar
        </p>

        {/* Beneficios centrados como bloque */}
        <ul className="mx-auto mt-6 flex w-fit flex-col gap-4 text-left font-bold text-ink">
          {beneficios.map(([icono, texto]) => (
            <li key={texto} className="flex items-center gap-3">
              <span className="text-2xl">{icono}</span>
              <span>{texto}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* PANEL DERECHO */}
      <section className="flex items-center justify-center bg-cream px-4 py-6 sm:px-6">
        <form
          onSubmit={submit}
          className="w-full max-w-lg space-y-3 rounded-3xl bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-center text-3xl font-extrabold text-ink">Iniciar sesión</h2>
          <p className="text-center text-slate-600">Nos alegra tenerte de vuelta</p>

          {/* Rol */}
          <div className="grid grid-cols-2 gap-3">
            {[
              ['propietario', '👤 Propietario de mascota'],
              ['veterinario', '🩺 Personal veterinario'],
            ].map(([k, t]) => (
              <button
                type="button"
                key={k}
                onClick={() => setRol(k)}
                className={`rounded-2xl px-2 py-3 text-sm font-bold transition-colors ${
                  rol === k ? 'bg-ink text-white' : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Correo */}
          <label className="block font-bold">
            Correo electrónico
            <input
              type="email"
              required
              className={`${inp} mt-1 font-normal`}
              placeholder="Ingresa tu correo electrónico"
              value={f.email}
              onChange={(e) => setF({ ...f, email: e.target.value })}
            />
          </label>

          {/* Contraseña */}
          <label className="block font-bold">
            Contraseña
            <div className="relative mt-1">
              <input
                type={show ? 'text' : 'password'}
                required
                className={`${inp} pr-12 font-normal`}
                placeholder="Ingresa tu contraseña"
                value={f.pass}
                onChange={(e) => setF({ ...f, pass: e.target.value })}
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
                aria-label={show ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {show ? '🙈' : '👁'}
              </button>
            </div>
          </label>

          {/* Opciones */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={f.recordar}
                onChange={(e) => setF({ ...f, recordar: e.target.checked })}
              />
              Recordarme
            </label>
            <a href="#" className="font-bold text-teal">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <Btn type="submit" className="w-full py-3">
            Iniciar sesión
          </Btn>

          <p className="text-center text-sm text-slate-600">¿Eres nuevo en PetLink?</p>

          <Btn variant="outline" type="button" className="w-full py-3">
            Crear una cuenta
          </Btn>

          <p className="text-center text-xs text-slate-500">
            Al continuar, aceptas nuestros{' '}
            <a className="text-teal" href="#">términos y condiciones</a> y el{' '}
            <a className="text-teal" href="#">aviso de privacidad</a>.
          </p>
        </form>
      </section>
    </div>
  )
}
