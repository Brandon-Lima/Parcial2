export class Proceso {
  id: number = 0;
  nombre: string = '';
  responsable: string = '';
  estado: string = '';
  prioridad: string = '';
  descripcion: string = '';

  constructor(
    id: number,
    nombre: string,
    responsable: string,
    estado: string,
    prioridad: string,
    descripcion: string,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.responsable = responsable;
    this.estado = estado;
    this.prioridad = prioridad;
    this.descripcion = descripcion;
  }
}
