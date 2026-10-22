import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Proceso } from '../proceso.model';
import { ProcesosService } from '../procesos.service';

@Component({
  imports: [FormsModule, RouterModule],
  selector: 'app-procesos-component',
  styleUrl: './procesos-component.css',
  templateUrl: './procesos-component.html',
})
export class ProcesosComponent implements OnInit {
  cuadroNombre: string = "";
  cuadroResponsable: string = "";
  cuadroEstado: string = "Pendiente";
  cuadroPrioridad: string = "Media";
  cuadroDescripcion: string = "";
  procesos: Proceso[];
  estados: string[];
  prioridades: string[];

  constructor(private procesosService: ProcesosService) {}

  ngOnInit() {
    this.procesos = this.procesosService.consultar_procesos();
    this.estados = this.procesosService.estados;
    this.prioridades = this.procesosService.prioridades;
  }

  agregar_proceso() {
    if (this.cuadroNombre == "" || this.cuadroResponsable == "") {
      return;
    }
    this.procesosService.agregar_proceso(
      this.cuadroNombre,
      this.cuadroResponsable,
      this.cuadroEstado,
      this.cuadroPrioridad,
      this.cuadroDescripcion
    );
    this.cuadroNombre = "";
    this.cuadroResponsable = "";
    this.cuadroEstado = "Pendiente";
    this.cuadroPrioridad = "Media";
    this.cuadroDescripcion = "";
  }

  avanzar_estado(indice: number) {
    let proceso: Proceso = this.procesosService.encontrar_proceso(indice);
    if (proceso.estado == "Pendiente") {
      this.procesosService.modificar_proceso(indice, "En curso");
    } else if (proceso.estado == "En curso") {
      this.procesosService.modificar_proceso(indice, "Completado");
    }
  }
}
