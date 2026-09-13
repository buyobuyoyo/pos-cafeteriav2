import { Component, input } from '@angular/core';

@Component({
  selector: 'app-empleado-card',
  imports: [],
  templateUrl: './empleado-card.html',
  styleUrl: './empleado-card.css',
})
export class EmpleadoCard {
  nombre = input.required<string>();
  cargo = input.required<string>();
  id = input.required<number>();
  foto = input.required<string>();
}
