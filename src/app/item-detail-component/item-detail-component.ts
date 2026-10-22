import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Proceso } from '../proceso.model';

@Component({
  imports: [RouterModule],
  selector: 'app-item-detail-component',
  styleUrl: './item-detail-component.css',
  templateUrl: './item-detail-component.html',
})
export class ItemDetailComponent {
  @Input() item: Proceso;
}