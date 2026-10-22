import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proceso } from '../proceso.model';
import { ProcesosService } from '../procesos.service';

@Component({
  imports: [],
  selector: 'app-proceso-detalle-component',
  styleUrl: './proceso-detalle-component.css',
  templateUrl: './proceso-detalle-component.html',
})
export class ProcesoDetalleComponent implements OnInit {
  proceso: string = "";
  datosProceso: Proceso = new Proceso(0, "", "", "", "", "");
  existe: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private procesosService: ProcesosService) {}

  ngOnInit() {
    this.proceso = this.route.snapshot.params['proceso'];

    let indice: number = this.procesosService.buscar_indice(this.proceso);
    if (indice >= 0) {
      this.datosProceso = this.procesosService.encontrar_proceso(indice);
      this.existe = true;
    }
  }

  volverProcesos() {
    this.router.navigate(['/procesos']);
  }
}
