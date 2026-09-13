import { Component } from '@angular/core';
import { ProductoCard } from '../../componentes/producto-card/producto-card';
import { OrdenCompra } from '../../componentes/orden-compra/orden-compra';

@Component({
  selector: 'app-compras',
  imports: [ProductoCard, OrdenCompra],
  templateUrl: './compras.html',
  styleUrl: './compras.css',
})
export class Compras {
  insumosComida = [
    { id: 1, nombre: 'Bombones Chocolate', cantidad: 8, precio: 50, imagen: '/imagenes/productos/bombones-chocolate.jpg' },
    { id: 2, nombre: 'Muffins Chispas', cantidad: 9, precio: 50, imagen: '/imagenes/productos/muffins-chispas.jpg' },
    { id: 3, nombre: 'Rebanada Red Velvet', cantidad: 10, precio: 50, imagen: '/imagenes/productos/rebanada-red-velvet.jpg' },
  ];

  insumosBebidas = [
    { id: 4, nombre: 'Latte', cantidad: 9, precio: 120, imagen: '/imagenes/productos/latte.jpg' },
    { id: 5, nombre: 'Tisana', cantidad: 6, precio: 140, imagen: '/imagenes/productos/tisana.jpg' },
    { id: 6, nombre: 'Matcha', cantidad: 2, precio: 140, imagen: '/imagenes/productos/matcha.jpg' },
  ];

  itemsOrden = [
    { nombre: 'Muffins Chispas', cantidad: 2, precio: 50, proveedor: 'Café Andino' },
  ];

  get total(): number {
    return this.itemsOrden.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
  }
}
