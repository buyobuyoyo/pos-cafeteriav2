import { Component } from '@angular/core';
import { ProductoCard } from '../../componentes/producto-card/producto-card';
import { OrdenResumen } from '../../componentes/orden-resumen/orden-resumen';

@Component({
  selector: 'app-ventas',
  imports: [ProductoCard, OrdenResumen],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas {
  categorias = ['Dulces', 'Pastelería', 'Bebidas frías', 'Bebidas calientes', 'Sándwiches'];

  productos = [
    { id: 1, nombre: 'Bombones Chocolate', precio: 50, imagen: '/imagenes/productos/bombones-chocolate.jpg' },
    { id: 2, nombre: 'Muffins Chispas', precio: 40, imagen: '/imagenes/productos/muffins-chispas.jpg' },
    { id: 3, nombre: 'Rebanada Red Velvet', precio: 40, imagen: '/imagenes/productos/rebanada-red-velvet.jpg' },
  ];

  itemsOrden = [{ nombre: 'BombonesCH.', cantidad: 1, precio: 50 }];

  get total(): number {
    return this.itemsOrden.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
  }
}
