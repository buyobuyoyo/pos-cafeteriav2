import { Component } from '@angular/core';

@Component({
  selector: 'app-finanzas',
  imports: [],
  templateUrl: './finanzas.html',
  styleUrl: './finanzas.css',
})
export class Finanzas {
  totales = { insumos: 1500, personal: 1100, ventas: 5500 };

  finanzasPorDia = [
    { fecha: '12/09/01', insumos: 230, personal: 1000, ventas: 2400 },
    { fecha: '12/12/12', insumos: 100, personal: 800, ventas: 3500 },
  ];

  maxTotal = Math.max(this.totales.insumos, this.totales.personal, this.totales.ventas);
}
