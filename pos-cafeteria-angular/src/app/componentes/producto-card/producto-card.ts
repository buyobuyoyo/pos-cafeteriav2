import { Component, input } from '@angular/core';

@Component({
  selector: 'app-producto-card',
  imports: [],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css',
})
export class ProductoCard {
  nombre = input.required<string>();
  etiqueta = input.required<string>();
  imagen = input.required<string>();
}
