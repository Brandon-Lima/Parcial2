import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Proceso } from '../proceso.model';

@Component({
  imports: [],
  selector: 'app-item-list-component',
  styleUrl: './item-list-component.css',
  templateUrl: './item-list-component.html',
})
export class ItemListComponent {
  @Input() items: Proceso[];
  @Input() seleccionadoId: number = 0;

  @Output() itemSeleccionado = new EventEmitter<Proceso>();

  seleccionar(item: Proceso) {
    this.itemSeleccionado.emit(item);
  }
}