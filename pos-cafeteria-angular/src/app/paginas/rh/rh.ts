import { Component } from '@angular/core';
import { EmpleadoCard } from '../../componentes/empleado-card/empleado-card';

@Component({
  selector: 'app-rh',
  imports: [EmpleadoCard],
  templateUrl: './rh.html',
  styleUrl: './rh.css',
})
export class Rh {
  numEmpleados = 9;
  staffRequerido = 15;
  diferencia = this.staffRequerido - this.numEmpleados;
  estado = this.diferencia > 0 ? 'Understaffed' : 'Overstaffed';
  rendimiento = 73.9;

  empleado = { id: 1, nombre: 'Juan Pérez', cargo: 'Barista', foto: '/imagenes/empleados/juan-perez.png' };
}
