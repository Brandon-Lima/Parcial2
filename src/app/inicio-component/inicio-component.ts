import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProcesosService } from '../procesos.service';

@Component({
  imports: [RouterModule],
  selector: 'app-inicio-component',
  styleUrl: './inicio-component.css',
  templateUrl: './inicio-component.html',
})
export class InicioComponent implements OnInit {
  titulo = "Sistema de Gestion de Procesos";
  total: number = 0;

  constructor(private procesosService: ProcesosService) {}

  ngOnInit() {
    this.total = this.procesosService.total_procesos();
  }
}