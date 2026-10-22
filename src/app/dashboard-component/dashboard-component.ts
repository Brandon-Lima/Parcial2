import { Component, OnInit } from '@angular/core';
import { ItemDetailComponent } from '../item-detail-component/item-detail-component';
import { ItemListComponent } from '../item-list-component/item-list-component';
import { Proceso } from '../proceso.model';
import { ProcesosService } from '../procesos.service';

@Component({
  imports: [ItemListComponent, ItemDetailComponent],
  selector: 'app-dashboard-component',
  styleUrl: './dashboard-component.css',
  templateUrl: './dashboard-component.html',
})
export class DashboardComponent implements OnInit {
  titulo = 'Dashboard de procesos';
  procesos: Proceso[];
  procesoSeleccionado: Proceso = new Proceso(0, '', '', '', '', '');
  haySeleccion: boolean = false;

  constructor(private procesosService: ProcesosService) {}

  ngOnInit() {
    this.procesos = this.procesosService.consultar_procesos();
  }

  mostrar_detalle(proceso: Proceso) {
    this.procesoSeleccionado = proceso;
    this.haySeleccion = true;
  }
}
