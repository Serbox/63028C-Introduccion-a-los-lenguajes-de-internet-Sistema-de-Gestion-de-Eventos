export interface IEvent {

  nombre: string
  fecha: string
  locacion: Ilocacion
  foto: string
  likes: number
  user: string
  descripcion: string
}

export interface Ilocacion {
  pais: string
  ciudad: string
  direccion: string
  hora: string
}
