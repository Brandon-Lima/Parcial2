import { Component, OnInit } from '@angular/core';
import { Proceso } from '../proceso.model';
import { ProcesosService } from '../procesos.service';

@Component({
  imports: [],
  selector: 'app-reportes-component',
  styleUrl: './reportes-component.css',
  templateUrl: './reportes-component.html',
})
export class ReportesComponent implements OnInit {
  procesos: Proceso[];
  estados: string[];
  total: number = 0;

  constructor(private procesosService: ProcesosService) {}

  ngOnInit() {
    this.procesos = this.procesosService.consultar_procesos();
    this.estados = this.procesosService.estados;
    this.total = this.procesosService.total_procesos();
  }

  cantidad(estado: string) {
    return this.procesosService.contar_por_estado(estado);
  }
}
