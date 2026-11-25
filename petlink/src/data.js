// Datos de ejemplo: reemplaza por llamadas a tu API
export const vets = [
  { id: 1, nombre: 'VetPet Huejutla', rating: 4.8, reseñas: 124, dist: '1.2 km', dir: 'Av. Revolución 123, Col. Centro', horario: 'Lun–Sáb 9:00–19:00', tags: ['Consulta general', 'Vacunación', 'Cirugía'] },
  { id: 2, nombre: 'Clínica Animalitos', rating: 4.6, reseñas: 98, dist: '2.5 km', dir: 'Av. Juárez 45, Col. Centro', horario: 'Lun–Dom 8:00–20:00', tags: ['Estética', 'Laboratorio', 'Rayos X'] },
  { id: 3, nombre: 'PetCare Huasteca', rating: 4.7, reseñas: 76, dist: '3.8 km', dir: 'Blvd. Aviación 210', horario: '24 horas', tags: ['Consulta', 'Hospitalización', 'Urgencias'] },
]
export const productos = [
  { id: 1, nombre: 'Croquetas Royal Canin', desc: 'Adulto 15 kg', precio: 1280, rating: 4.7, cat: 'Alimento' },
  { id: 2, nombre: 'Shampoo medicado', desc: 'Piel sensible 250 ml', precio: 220, rating: 4.7, cat: 'Higiene' },
  { id: 3, nombre: 'Collar antipulgas', desc: 'Perro grande', precio: 350, rating: 4.7, cat: 'Medicina' },
  { id: 4, nombre: 'Juguete mordedera', desc: 'Goma resistente', precio: 120, rating: 4.7, cat: 'Juguetes' },
]
export const servicios = [
  { icon: '🩺', nombre: 'Consulta general', precio: 350 }, { icon: '💉', nombre: 'Vacunación', precio: 280 },
  { icon: '✂️', nombre: 'Estética', precio: 450 }, { icon: '🦷', nombre: 'Limpieza dental', precio: 600 },
]
export const mascotas = [
  { nombre: 'Max', info: 'Golden Retriever · Macho · 2 años', zona: 'Centro', tags: ['Cariñoso', 'Activo'] },
  { nombre: 'Luna', celo: true, info: 'Husky Siberiano · Hembra · 3 años', zona: 'Norte', tags: ['Tranquila', 'Juguetona'] },
  { nombre: 'Milo', info: 'Gato doméstico · Macho · 1 año', zona: 'Sur', tags: ['Cariñoso', 'Independiente'] },
  { nombre: 'Kira', info: 'French Poodle · Hembra · 3 años', zona: 'Centro', tags: ['Sociable', 'Inteligente'] },
]
export const noticias = [
  { id: 1, cat: 'Salud', fecha: '10 oct 2026', titulo: '5 señales de que tu mascota necesita una revisión veterinaria', resumen: 'La prevención es la mejor forma de cuidar su salud. Conoce los síntomas que no debes ignorar.' },
  { id: 2, cat: 'Alimentación', fecha: '7 oct 2026', titulo: '¿Qué alimento es mejor para tu gato?', resumen: 'Necesidades por etapa de vida.' },
  { id: 3, cat: 'Higiene', fecha: '5 oct 2026', titulo: 'Baño y cuidado del pelaje', resumen: 'Frecuencia y productos ideales.' },
  { id: 4, cat: 'Bienestar', fecha: '4 oct 2026', titulo: 'Juegos para un perro feliz', resumen: 'Estimulación mental y ejercicio.' },
]
