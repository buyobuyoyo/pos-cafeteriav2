import { Component } from '@angular/core';
import { ProductoCard } from '../../componentes/producto-card/producto-card';

@Component({
  selector: 'app-inventario',
  imports: [ProductoCard],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css',
})
export class Inventario {
  categorias = ['Dulces', 'Pastelería', 'Bebidas frías', 'Bebidas calientes', 'Sándwiches'];

  productos = [
    { id: 1, nombre: 'Bombones Chocolate', categoria: 'Dulces', precio: 50, imagen: '/imagenes/productos/bombones-chocolate.jpg' },
    { id: 2, nombre: 'Muffins Chispas', categoria: 'Pastelería', precio: 40, imagen: '/imagenes/productos/muffins-chispas.jpg' },
    { id: 3, nombre: 'Rebanada Red Velvet', categoria: 'Pastelería', precio: 40, imagen: '/imagenes/productos/rebanada-red-velvet.jpg' },
    { id: 4, nombre: 'Latte', categoria: 'Bebidas calientes', precio: 120, imagen: '/imagenes/productos/latte.jpg' },
    { id: 5, nombre: 'Tisana', categoria: 'Bebidas frías', precio: 140, imagen: '/imagenes/productos/tisana.jpg' },
    { id: 6, nombre: 'Matcha', categoria: 'Bebidas frías', precio: 140, imagen: '/imagenes/productos/matcha.jpg' },
  ];
}
