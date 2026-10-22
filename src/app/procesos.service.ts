import { Injectable } from '@angular/core';
import { Proceso } from './proceso.model';

@Injectable({ providedIn: 'root' })
export class ProcesosService {
  estados: string[] = ['Pendiente', 'En curso', 'Completado'];
  prioridades: string[] = ['Alta', 'Media', 'Baja'];

  procesos: Proceso[] = [
    new Proceso(
      1,
      'Contratacion',
      'Brandon Lima',
      'Completado',
      'Alta',
      'Seleccion y contratacion de nuevo personal para el area de sistemas.',
    ),
    new Proceso(
      2,
      'Planilla',
      'Esdras Palacios',
      'En curso',
      'Alta',
      'Calculo mensual de salarios, descuentos y prestaciones.',
    ),
    new Proceso(
      3,
      'Inventario',
      'Rodrigo Lima',
      'En curso',
      'Media',
      'Control de entradas y salidas de productos en bodega.',
    ),
    new Proceso(
      4,
      'Capacitacion',
      'Ricardo PPT',
      'Pendiente',
      'Baja',
      'Programa de formacion interna para los empleados.',
    ),
    new Proceso(
      5,
      'Auditoria',
      'Natan Martinez',
      'Pendiente',
      'Media',
      'Revision de los controles internos del trimestre.',
    ),
  ];

  ultimoId: number = 5;

  consultar_procesos() {
    return this.procesos;
  }

  encontrar_proceso(indice: number) {
    let proceso: Proceso = this.procesos[indice];
    return proceso;
  }

  buscar_indice(nombre: string) {
    let indice: number = -1;
    for (let i = 0; i < this.procesos.length; i++) {
      if (this.procesos[i].nombre == nombre) {
        indice = i;
      }
    }
    return indice;
  }

  agregar_proceso(
    nombre: string,
    responsable: string,
    estado: string,
    prioridad: string,
    descripcion: string,
  ) {
    this.ultimoId++;
    let proceso = new Proceso(this.ultimoId, nombre, responsable, estado, prioridad, descripcion);
    this.procesos.push(proceso);
  }

  modificar_proceso(indice: number, estado: string) {
    let procesoModificado = this.procesos[indice];
    procesoModificado.estado = estado;
  }

  contar_por_estado(estado: string) {
    let cantidad: number = 0;
    for (let i = 0; i < this.procesos.length; i++) {
      if (this.procesos[i].estado == estado) {
        cantidad++;
      }
    }
    return cantidad;
  }

  total_procesos() {
    return this.procesos.length;
  }
}
